use std::path::Path;

use ::device::{Device};
use ::handle::{Handle};

/// A libudev context.
pub struct Context {
    udev: *mut ::ffi::udev
}

impl Clone for Context {
    /// Bumps reference count of `libudev` context.
    fn clone(&self) -> Self {
        Context {
            udev: unsafe { ::ffi::udev_ref(self.udev) }
        }
    }
}

/// Drops copy of `Context`.
///
/// This crate uses `udev`'s reference counting to ensure correct order of releasing resources.
/// When dropping a struct Rust will first call its `drop` and then `drop`s of its members. We use
/// that to ensure entities depending on `libudev` context will be released before the context by
/// holding copy of `Context` in struct representing that entity and implementing adequate `Drop`.
impl Drop for Context {
    fn drop(&mut self) {
        unsafe {
            ::ffi::udev_unref(self.udev);
        }
    }
}

#[doc(hidden)]
impl Handle<::ffi::udev> for Context {
    fn as_ptr(&self) -> *mut ::ffi::udev {
        self.udev
    }
}

impl Context {
    /// Creates a new context.
    pub fn new() -> ::Result<Self> {
        let ptr = try_alloc!(unsafe { ::ffi::udev_new() });

        Ok(Context { udev: ptr })
    }

    /// Creates a device for a given syspath.
    ///
    /// The `syspath` parameter should be a path to the device file within the `sysfs` file system,
    /// e.g., `/sys/devices/virtual/tty/tty0`.
    pub fn device_from_syspath(&self, syspath: &Path) -> ::Result<Device> {
        let syspath = try!(::util::os_str_to_cstring(syspath));

        let ptr = try_alloc!(unsafe {
            ::ffi::udev_device_new_from_syspath(self.udev, syspath.as_ptr())
        });

        Ok(::device::new(self.clone(), ptr))
    }
}
