var searchIndex = {};
searchIndex["mowl"] = {"doc":"Minimal logger with color support","items":[[3,"Logger","mowl","The logging structure",null,null],[5,"init_with_level","","Initializes the global logger with a specific `max_log_level`.",null,{"inputs":[{"name":"loglevel"}],"output":{"name":"result"}}],[5,"init","","Initializes the global logger with `max_log_level` set to `LogLevel::Trace`.",null,{"inputs":[],"output":{"name":"result"}}],[0,"error","","Basic error handling mechanisms",null,null],[3,"Error","mowl::error","The Error type.",null,null],[12,"0","","The kind of the error.",0,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",1,null],[13,"Io","","An I/O error.",1,null],[13,"Log","","A logger error error.",1,null],[13,"Term","","A terminal error.",1,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns *some type that can be converted to `ErrorKind`*, boxes the original error to store as the cause, then returns a new error containing the original error.",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",0,null],[11,"with_chain","","",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",0,null],[11,"iter","","",0,{"inputs":[{"name":"self"}],"output":{"name":"errorchainiter"}}],[11,"backtrace","","",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"extract_backtrace","","",0,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",0,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",0,{"inputs":[{"name":"self"}],"output":{"name":"errorchainiter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"setloggererror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",1,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"enabled","mowl","",3,{"inputs":[{"name":"self"},{"name":"logmetadata"}],"output":{"name":"bool"}}],[11,"log","","",3,{"inputs":[{"name":"self"},{"name":"logrecord"}],"output":null}]],"paths":[[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[3,"Logger"]]};
initSearch(searchIndex);