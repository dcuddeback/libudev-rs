use std::path::Path;

use std::ffi::{OsStr};
use ::device::{Device};
use ::handle::{Handle};

/// A libudev context.
pub struct Context {
    udev: *mut ::ffi::udev
}

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

fn makedev(major: u64, minor: u64) -> ::libc::dev_t {
    ((major & 0xfffff000) << 32) |
    ((major & 0x00000fff) <<  8) |
    ((minor & 0xffffff00) << 12) |
    ((minor & 0x000000ff)      )
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

        Ok(::device::new(self, ptr))
    }

    /// Creates a device for a given major/minor device number pair
    pub fn device_from_devnum(&self, kind: ::DeviceType, major: u64, minor: u64) -> ::Result<Device> {
        let devnum = makedev(major, minor);
        let ptr = try_alloc!(unsafe {
            ::ffi::udev_device_new_from_devnum(self.udev, match kind {
                ::DeviceType::Char => b'c' as ::libc::c_char,
                ::DeviceType::Block => b'b' as ::libc::c_char
            }, devnum)
        });

        Ok(::device::new(self, ptr))
    }

    /// Creates a device for from a subsystem and sysname
    pub fn device_from_subsystem_sysname<T: AsRef<OsStr>, U: AsRef<OsStr>>(&self, subsystem: T, sysname: U) -> ::Result<Device> {
        let subsystem = try!(::util::os_str_to_cstring(subsystem));
        let sysname = try!(::util::os_str_to_cstring(sysname));
        let ptr = try_alloc!(unsafe {
            ::ffi::udev_device_new_from_subsystem_sysname(self.udev, subsystem.as_ptr(), sysname.as_ptr())
        });
        Ok(::device::new(self, ptr))
    }
}
