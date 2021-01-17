var searchIndex = JSON.parse('{\
"libudev":{"doc":"","i":[[3,"Context","libudev","A libudev context. Contexts may not be sent or shared…",null,null],[3,"Device","","A structure that provides access to sysfs/kernel devices.",null,null],[3,"Properties","","Iterator over a device\'s properties.",null,null],[3,"Property","","A device property.",null,null],[3,"Attributes","","Iterator over a device\'s attributes.",null,null],[3,"Attribute","","A device attribute.",null,null],[3,"Enumerator","","An enumeration context.",null,null],[3,"Devices","","Iterator over devices.",null,null],[3,"Error","","The error type for libudev operations.",null,null],[3,"Monitor","","Monitors for device events.",null,null],[3,"MonitorSocket","","An active monitor that can receive events.",null,null],[3,"Event","","An event that indicates a change in device state.",null,null],[4,"ErrorKind","","Types of errors that occur in libudev.",null,null],[13,"NoMem","","",0,null],[13,"InvalidInput","","",0,null],[13,"Io","","",0,null],[4,"EventType","","Types of events that can be received from udev.",null,null],[13,"Add","","A device was added.",1,null],[13,"Change","","A device changed.",1,null],[13,"Remove","","A device was removed.",1,null],[13,"Unknown","","An unknown event occurred.",1,null],[11,"new","","Creates a new context.",2,[[],["result",6]]],[11,"from_syspath","","Creates a device for a given syspath.",3,[[["context",3],["path",3]],["result",6]]],[11,"is_initialized","","Checks whether the device has already been handled by udev.",3,[[]]],[11,"devnum","","Gets the device\'s major/minor number.",3,[[],[["option",4],["dev_t",6]]]],[11,"syspath","","Returns the syspath of the device.",3,[[],[["path",3],["option",4]]]],[11,"devpath","","Returns the kernel devpath value of the device.",3,[[],[["option",4],["osstr",3]]]],[11,"devnode","","Returns the path to the device node belonging to the device.",3,[[],[["path",3],["option",4]]]],[11,"parent","","Returns the parent of the device.",3,[[],[["device",3],["option",4]]]],[11,"subsystem","","Returns the subsystem name of the device.",3,[[],[["option",4],["osstr",3]]]],[11,"sysname","","Returns the kernel device name for the device.",3,[[],[["option",4],["osstr",3]]]],[11,"sysnum","","Returns the instance number of the device.",3,[[],["option",4]]],[11,"devtype","","Returns the devtype name of the device.",3,[[],[["option",4],["osstr",3]]]],[11,"driver","","Returns the name of the kernel driver attached to the…",3,[[],[["option",4],["osstr",3]]]],[11,"property_value","","Retrieves the value of a device property.",3,[[["osstr",3],["asref",8]],[["option",4],["osstr",3]]]],[11,"attribute_value","","Retrieves the value of a device attribute.",3,[[["osstr",3],["asref",8]],[["option",4],["osstr",3]]]],[11,"set_attribute_value","","Sets the value of a device attribute.",3,[[["osstr",3],["asref",8]],["result",6]]],[11,"properties","","Returns an iterator over the device\'s properties.",3,[[],["properties",3]]],[11,"attributes","","Returns an iterator over the device\'s attributes.",3,[[],["attributes",3]]],[11,"name","","Returns the property name.",4,[[],["osstr",3]]],[11,"value","","Returns the property value.",4,[[],["osstr",3]]],[11,"name","","Returns the attribute name.",5,[[],["osstr",3]]],[11,"value","","Returns the attribute value.",5,[[],[["option",4],["osstr",3]]]],[11,"new","","Creates a new Enumerator.",6,[[["context",3]],["result",6]]],[11,"match_is_initialized","","Adds a filter that matches only initialized devices.",6,[[],["result",6]]],[11,"match_subsystem","","Adds a filter that matches only devices that belong to the…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_attribute","","Adds a filter that matches only devices with the given…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_sysname","","Adds a filter that matches only devices with the given…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_property","","Adds a filter that matches only devices with the given…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_tag","","Adds a filter that matches only devices with the given tag.",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_parent","","Includes the parent device and all devices in the subtree…",6,[[["device",3]],["result",6]]],[11,"nomatch_subsystem","","Adds a filter that matches only devices that don\'t belong…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"nomatch_attribute","","Adds a filter that matches only devices that don\'t have…",6,[[["osstr",3],["asref",8]],["result",6]]],[11,"add_syspath","","Includes the device with the given syspath.",6,[[["path",3]],["result",6]]],[11,"scan_devices","","Scans `/sys` for devices matching the attached filters.",6,[[],[["result",6],["devices",3]]]],[11,"kind","","Returns the corresponding `ErrorKind` for this error.",7,[[],["errorkind",4]]],[11,"description","","Returns a description of the error.",7,[[]]],[11,"new","","Creates a new `Monitor`.",8,[[["context",3]],["result",6]]],[11,"match_subsystem","","Adds a filter that matches events for devices with the…",8,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_subsystem_devtype","","Adds a filter that matches events for devices with the…",8,[[["osstr",3],["asref",8]],["result",6]]],[11,"match_tag","","Adds a filter that matches events for devices with the…",8,[[["osstr",3],["asref",8]],["result",6]]],[11,"clear_filters","","Removes all filters currently set on the monitor.",8,[[],["result",6]]],[11,"listen","","Listens for events matching the current filters.",8,[[],[["result",6],["monitorsocket",3]]]],[11,"receive_event","","Receives the next available event from the monitor.",9,[[],[["event",3],["option",4]]]],[11,"event_type","","Returns the `EventType` corresponding to this event.",10,[[],["eventtype",4]]],[11,"sequence_number","","Returns the event\'s sequence number.",10,[[]]],[11,"device","","Returns the device associated with this event.",10,[[],["device",3]]],[6,"Result","","A `Result` type for libudev operations.",null,null],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"into_iter","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"into_iter","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"into_iter","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"drop","","Decrements reference count of `libudev` context.",2,[[]]],[11,"drop","","",3,[[]]],[11,"drop","","",6,[[]]],[11,"drop","","",8,[[]]],[11,"next","","",11,[[],[["property",3],["option",4]]]],[11,"size_hint","","",11,[[]]],[11,"next","","",12,[[],[["option",4],["attribute",3]]]],[11,"size_hint","","",12,[[]]],[11,"next","","",13,[[],[["device",3],["option",4]]]],[11,"size_hint","","",13,[[]]],[11,"clone","","Increments reference count of `libudev` context.",2,[[]]],[11,"clone","","",0,[[],["errorkind",4]]],[11,"clone","","",1,[[],["eventtype",4]]],[11,"default","","",1,[[],["eventtype",4]]],[11,"eq","","",0,[[["errorkind",4]]]],[11,"ne","","",0,[[["errorkind",4]]]],[11,"eq","","",1,[[["eventtype",4]]]],[11,"deref","","",10,[[],["device",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],[["stdresult",4],["error",3]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"description","","",7,[[]]],[11,"as_raw_fd","","Returns the file descriptor of the monitor\'s socket.",9,[[],["rawfd",6]]]],"p":[[4,"ErrorKind"],[4,"EventType"],[3,"Context"],[3,"Device"],[3,"Property"],[3,"Attribute"],[3,"Enumerator"],[3,"Error"],[3,"Monitor"],[3,"MonitorSocket"],[3,"Event"],[3,"Properties"],[3,"Attributes"],[3,"Devices"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);