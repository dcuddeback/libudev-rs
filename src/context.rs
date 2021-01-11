use ::handle::{Handle};

/// A libudev context.
pub struct Context {
    udev: *mut ::ffi::udev
}

impl Clone for Context {
    /// Increments reference count of `libudev` context.
    fn clone(&self) -> Self {
        Context {
            udev: unsafe { ::ffi::udev_ref(self.udev) },
        }
    }
}

impl Drop for Context {
    /// Decrements reference count of `libudev` context.
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
}
