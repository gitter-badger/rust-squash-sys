initSidebarItems({"constant":[["SQUASH_BAD_PARAM","One or more of the parameters were not valid."],["SQUASH_BAD_VALUE","One or more parameter values was not valid."],["SQUASH_BUFFER_EMPTY","Supplied buffer was empty."],["SQUASH_BUFFER_FULL","Insufficient space in buffer."],["SQUASH_CODEC_INFO_AUTO_MASK","Mask of flags which are automatically set based on which callbacks are provided."],["SQUASH_CODEC_INFO_CAN_FLUSH","Flushing is supported."],["SQUASH_CODEC_INFO_DECOMPRESS_UNSAFE","The codec is not safe to use when decompressing untrusted data."],["SQUASH_CODEC_INFO_INVALID","Invalid codec."],["SQUASH_CODEC_INFO_KNOWS_UNCOMPRESSED_SIZE","The compressed data encodes the size of the uncompressed data without having to decompress it."],["SQUASH_CODEC_INFO_MASK",""],["SQUASH_CODEC_INFO_NATIVE_STREAMING","The codec natively supports a streaming interface."],["SQUASH_CODEC_INFO_VALID","The codec is valid."],["SQUASH_CODEC_INFO_WRAP_SIZE",""],["SQUASH_END_OF_STREAM","Reached the end of the stream while decoding."],["SQUASH_FAILED","Operation failed."],["SQUASH_INVALID_BUFFER","A buffer passed to squash was invalid."],["SQUASH_INVALID_OPERATION","The requested operation is not available."],["SQUASH_IO","An input/output error occurred."],["SQUASH_LICENSE_APACHE",""],["SQUASH_LICENSE_APACHE2",""],["SQUASH_LICENSE_BSD2",""],["SQUASH_LICENSE_BSD3",""],["SQUASH_LICENSE_BSD4",""],["SQUASH_LICENSE_CDDL",""],["SQUASH_LICENSE_COPYLEFT_INCOMPATIBLE",""],["SQUASH_LICENSE_FLAGS_MASK",""],["SQUASH_LICENSE_GPL1",""],["SQUASH_LICENSE_GPL1_PLUS",""],["SQUASH_LICENSE_GPL2",""],["SQUASH_LICENSE_GPL2_PLUS",""],["SQUASH_LICENSE_GPL3",""],["SQUASH_LICENSE_GPL3_PLUS",""],["SQUASH_LICENSE_ISC",""],["SQUASH_LICENSE_LGPL2P1",""],["SQUASH_LICENSE_LGPL2P1_PLUS",""],["SQUASH_LICENSE_LGPL3",""],["SQUASH_LICENSE_LGPL3_PLUS",""],["SQUASH_LICENSE_MIT",""],["SQUASH_LICENSE_MPL",""],["SQUASH_LICENSE_MSPL",""],["SQUASH_LICENSE_OR_GREATER",""],["SQUASH_LICENSE_PERMISSIVE",""],["SQUASH_LICENSE_PROPRIETARY",""],["SQUASH_LICENSE_PUBLIC_DOMAIN",""],["SQUASH_LICENSE_STRONG_COPYLEFT",""],["SQUASH_LICENSE_TYPE_MASK",""],["SQUASH_LICENSE_UNKNOWN",""],["SQUASH_LICENSE_WEAK_COPYLEFT",""],["SQUASH_LICENSE_WTFPL",""],["SQUASH_LICENSE_X11",""],["SQUASH_LICENSE_ZLIB",""],["SQUASH_MEMORY","Not enough memory is available."],["SQUASH_NOT_FOUND","The requested codec could not be found."],["SQUASH_OK","Operation completed successfully."],["SQUASH_OPTION_TYPE_BOOL",""],["SQUASH_OPTION_TYPE_ENUM_INT",""],["SQUASH_OPTION_TYPE_ENUM_STRING",""],["SQUASH_OPTION_TYPE_INT",""],["SQUASH_OPTION_TYPE_NONE",""],["SQUASH_OPTION_TYPE_RANGE_INT",""],["SQUASH_OPTION_TYPE_RANGE_SIZE",""],["SQUASH_OPTION_TYPE_SIZE",""],["SQUASH_OPTION_TYPE_STRING",""],["SQUASH_PROCESSING","Operation partially completed."],["SQUASH_RANGE","A buffer was too large to be usable."],["SQUASH_SEARCH_PATH_SEPARATOR",""],["SQUASH_SPLICE_BUF_SIZE",""],["SQUASH_STATE","Performing the requested operation from the current state is not supported."],["SQUASH_STREAM_STATE_FINISHED",""],["SQUASH_STREAM_STATE_FINISHING",""],["SQUASH_STREAM_STATE_FLUSHING",""],["SQUASH_STREAM_STATE_IDLE",""],["SQUASH_STREAM_STATE_RUNNING",""],["SQUASH_UNABLE_TO_LOAD","Unable to load the requested resource."],["SQUASH_VERSION_API","API version"],["SQUASH_VERSION_CURRENT","Current version, encoded as a single number"],["SQUASH_VERSION_MAJOR","Major version number"],["SQUASH_VERSION_MINOR","Minor version number"],["SQUASH_VERSION_REVISION","Revision version number"]],"enum":[["SquashCodec","A compression/decompression codec."],["SquashContext","Context for all Squash operations."],["SquashFile","stdio-like API and utilities"],["SquashOperation",""],["SquashPlugin","A plugin."],["SquashStreamPrivate",""],["SquashStreamType","Stream type."]],"fn":[["SQUASH_VERSION","Encode the major, minor, and revisions into a single number"],["SQUASH_VERSION_EXTRACT_MAJOR","Extract the major version number from an encoded version"],["SQUASH_VERSION_EXTRACT_MINOR","Extract the minor version number from an encoded version"],["SQUASH_VERSION_EXTRACT_REVISION","Extract the revision number from an encoded version"],["squash_aligned_alloc","Allocate an aligned buffer"],["squash_aligned_free","Deallocate an aligned buffer"],["squash_calloc",""],["squash_codec_compress","Compress a buffer."],["squash_codec_compress_with_options","Compress a buffer with an existing SquashOptions."],["squash_codec_create_stream","Create a new stream."],["squash_codec_create_stream_with_options","Create a new stream with existing SquashOptions."],["squash_codec_decompress","Decompress a buffer."],["squash_codec_decompress_with_options","Decompress a buffer with an existing SquashOptions."],["squash_codec_get_context","Get the context associated with a codec."],["squash_codec_get_extension","Get the codec's extension."],["squash_codec_get_impl","Get the codec's function table."],["squash_codec_get_info","Get a bitmask of information about the codec."],["squash_codec_get_max_compressed_size","Get the maximum buffer size necessary to store compressed data."],["squash_codec_get_name","Get the name of a SquashCodec."],["squash_codec_get_option_info","Get a list of options applicable to the codec."],["squash_codec_get_plugin","Get the plugin associated with a codec."],["squash_codec_get_priority","Get the priority of a SquashCodec."],["squash_codec_get_uncompressed_size","Get the uncompressed size of the compressed buffer."],["squash_codec_init","Initialize a codec."],["squash_context_foreach_codec","Execute a callback for every loaded codec."],["squash_context_foreach_plugin","Execute a callback for every loaded plugin."],["squash_context_get_codec","Retrieve a `SquashCodec` from a `SquashContext`."],["squash_context_get_codec_from_extension","Retrieve a codec from a context based on an extension."],["squash_context_get_default","Retrieve the default `SquashContext`."],["squash_context_get_plugin","Retrieve a SquashPlugin from a `SquashContext`."],["squash_error","Emit an error."],["squash_file_close","Close a file."],["squash_file_eof","Determine whether the `file` has reached the end of file."],["squash_file_error","Retrieve the last return value."],["squash_file_flush","Immediately write any buffered data to a file."],["squash_file_flush_unlocked","Immediately write any buffered data to a file without acquiring the lock"],["squash_file_free","Free a file."],["squash_file_lock","Acquire the lock on a file."],["squash_file_open","Open a file."],["squash_file_open_with_options","Open a file using a with the specified options."],["squash_file_printf",""],["squash_file_read","Read from a compressed file."],["squash_file_read_unlocked","Read from a compressed file."],["squash_file_steal","Open a file using a with the specified options."],["squash_file_steal_with_options","Open an existing stdio file with the specified options."],["squash_file_unlock","Release the lock on a file."],["squash_file_write","Write data to a compressed file."],["squash_file_write_unlocked","Write data to a compressed file without acquiring the lock."],["squash_foreach_codec","Execute a callback for every loaded codec in the default context."],["squash_foreach_plugin","Execute a callback for every loaded plugin in the default context."],["squash_free",""],["squash_get_codec","Retrieve a SquashCodec."],["squash_get_codec_from_extension","Retrieve a codec based on an extension."],["squash_get_plugin","Retrieve a SquashPlugin."],["squash_license_from_string",""],["squash_license_to_string",""],["squash_malloc",""],["squash_object_destroy","Destroy an object."],["squash_object_get_ref_count","Get the current reference count of an object."],["squash_object_init","Initialize a new object."],["squash_object_ref","Increment the reference count on an object."],["squash_object_ref_sink","Sink a floating reference if one exists."],["squash_object_unref","Decrement the reference count on an object."],["squash_options_destroy","Destroy a SquashOptions instance."],["squash_options_get_bool","Retrieve the value of a boolean option"],["squash_options_get_bool_at","Retrieve the value of a boolean option"],["squash_options_get_int","Retrieve the value of an integer option"],["squash_options_get_int_at","Retrieve the value of an int option"],["squash_options_get_size","Retrieve the value of a size option"],["squash_options_get_size_at","Retrieve the value of a size option"],["squash_options_get_string","Retrieve the value of a string option"],["squash_options_get_string_at","Retrieve the value of a string option"],["squash_options_init","Initialize a new `SquashOptions` instance."],["squash_options_new","Create a new group of options."],["squash_options_newa","Create a new group of options from key and value arrays."],["squash_options_parse","Parse a variadic list of options."],["squash_options_parse_option","Parse a single option."],["squash_options_parsea","Parse an array of options."],["squash_options_set_bool","Set the value of a bool option."],["squash_options_set_bool_at","Set the value of a bool option at the given `index`."],["squash_options_set_int","Set the value of a int option."],["squash_options_set_int_at","Set the value of a int option at the given index."],["squash_options_set_size","Set the value of a size option."],["squash_options_set_size_at","Set the value of a size option at the given index."],["squash_options_set_string","Set the value of a string option."],["squash_options_set_string_at","Set the value of a string option at the given index."],["squash_plugin_foreach_codec","Execute a callback for every codec in the plugin."],["squash_plugin_get_codec","Get a codec from a plugin by name."],["squash_plugin_get_licences","Get the licenses of the plugin."],["squash_plugin_get_name","Get the name of a plugin."],["squash_plugin_init","Load a SquashPlugin"],["squash_realloc",""],["squash_set_default_search_path","Set the default search path for plugins."],["squash_set_memory_functions","Set memory management functions"],["squash_splice","Compress or decompress the contents of one file to another"],["squash_splice_custom",""],["squash_splice_custom_with_options",""],["squash_splice_with_options","compress or decompress the contents of one file to another"],["squash_status_to_string","Get a string representation of a status code."],["squash_stream_destroy","Destroy a stream."],["squash_stream_finish","Finish writing to a stream."],["squash_stream_flush","Flush a stream."],["squash_stream_init","Initialize a stream."],["squash_stream_new","Create a new stream with options."],["squash_stream_new_with_options","Create a new stream with an options instance."],["squash_stream_newa","Create a new stream with key/value option arrays."],["squash_stream_process","Process a stream."],["squash_version","Get the library version."],["squash_version_api","Get the API version."]],"struct":[["SquashCodecImpl","Function table for plugins."],["SquashCodecInfo","Information about the codec."],["SquashLicense",""],["SquashMemoryFuncs",""],["SquashObject","Reference-counting base class for other types."],["SquashOptionInfo","Information about options which can be passed to a codec."],["SquashOptionInfoEnumInt","A list of potential integer values."],["SquashOptionInfoEnumString","A list of strings which are mapped to integer values."],["SquashOptionInfoEnumStringMap","An item in a map of strings to integer values."],["SquashOptionInfoRangeInt","A range of potential integer values."],["SquashOptionInfoRangeSize","A range of potential size values."],["SquashOptionInfoUnion",""],["SquashOptionValue","A value."],["SquashOptions","A set of compression/decompression options."],["SquashStream","Compression/decompression streams."]],"type":[["SquashCodecForeachFunc","Callback to be invoked on each SquashCodec in a set."],["SquashDestroyNotify","Callback to be invoked when information data is no longer needed."],["SquashOptionType",""],["SquashPluginForeachFunc","Callback to be invoked on each SquashPlugin in a set."],["SquashReadFunc",""],["SquashStatus","Response status codes."],["SquashStreamState","State the stream is in."],["SquashWriteFunc",""]]});