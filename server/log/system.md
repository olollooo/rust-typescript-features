{"timestamp":"2022-08-25T14:43:02.457153Z","level":"INFO","fields":{"message":"listening on 127.0.0.1:3000"},"target":"main"}
{"timestamp":"2022-08-25T14:43:10.038869Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.041151Z","level":"TRACE","fields":{"message":"received 672 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.042855Z","level":"TRACE","fields":{"message":"Request.parse","bytes":672},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:43:10.044168Z","level":"TRACE","fields":{"message":"Request.parse Complete(672)"},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:43:10.046517Z","level":"DEBUG","fields":{"message":"parsed 14 headers"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.047128Z","level":"DEBUG","fields":{"message":"incoming body is empty"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.048542Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.049532Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.050713Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.051651Z","level":"TRACE","fields":{"message":"Server::encode status=200, body=Some(Unknown), req_method=Some(GET)"},"target":"hyper::proto::h1::role","span":{"name":"encode_headers"},"spans":[{"name":"encode_headers"}]}
{"timestamp":"2022-08-25T14:43:10.054177Z","level":"DEBUG","fields":{"message":"flushed 291 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.054915Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(282), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.055903Z","level":"TRACE","fields":{"message":"sized write, len = 282"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.056821Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":282},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.057724Z","level":"TRACE","fields":{"message":"no more write body allowed, user body is_end_stream = false"},"target":"hyper::proto::h1::dispatch"}
{"timestamp":"2022-08-25T14:43:10.058981Z","level":"DEBUG","fields":{"message":"flushed 282 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.060613Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Idle }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.074723Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.076338Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.089210Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.090573Z","level":"TRACE","fields":{"message":"received 536 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.091510Z","level":"TRACE","fields":{"message":"Request.parse","bytes":536},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:43:10.092555Z","level":"TRACE","fields":{"message":"Request.parse Complete(536)"},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:43:10.094187Z","level":"DEBUG","fields":{"message":"parsed 13 headers"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.095016Z","level":"DEBUG","fields":{"message":"incoming body is empty"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.097156Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.099025Z","level":"TRACE","fields":{"message":"Server::encode status=200, body=Some(Unknown), req_method=Some(GET)"},"target":"hyper::proto::h1::role","span":{"name":"encode_headers"},"spans":[{"name":"encode_headers"}]}
{"timestamp":"2022-08-25T14:43:10.100341Z","level":"DEBUG","fields":{"message":"flushed 307 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.102238Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(258853), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.103516Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.104190Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.105345Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.106211Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":16384,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.108242Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.109271Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":32768,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.110838Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.112072Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":49152,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.126296Z","level":"DEBUG","fields":{"message":"flushed 65536 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.128238Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(193317), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.129957Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.130894Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.134229Z","level":"DEBUG","fields":{"message":"flushed 16384 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.137418Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(176933), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.140915Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.142557Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.144338Z","level":"DEBUG","fields":{"message":"flushed 16384 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.145512Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(160549), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.147945Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.149041Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.150332Z","level":"DEBUG","fields":{"message":"flushed 16384 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.151850Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Body(Encoder { kind: Length(144165), is_last: false }), keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:43:10.153414Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.154305Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":0,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.155888Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.156538Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":16384,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.157357Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.158213Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":32768,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.159160Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.159822Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":49152,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.160585Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.161414Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":65536,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.162305Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.163000Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":81920,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.163899Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.164971Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":98304,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.165878Z","level":"TRACE","fields":{"message":"sized write, len = 16384"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.166481Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":114688,"buf.len":16384},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.167669Z","level":"TRACE","fields":{"message":"sized write, len = 13093"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:43:10.168343Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":131072,"buf.len":13093},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.168990Z","level":"TRACE","fields":{"message":"no more write body allowed, user body is_end_stream = false"},"target":"hyper::proto::h1::dispatch"}
{"timestamp":"2022-08-25T14:43:10.170124Z","level":"DEBUG","fields":{"message":"flushed 144165 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:43:10.171505Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Idle }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.291340Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.378065Z","level":"TRACE","fields":{"message":"received 0 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:14.489296Z","level":"TRACE","fields":{"message":"parse eof"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:14.536044Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.542528Z","level":"DEBUG","fields":{"message":"read eof"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.545046Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.549265Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.553410Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.555162Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Closed, writing: Closed, keep_alive: Disabled }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.558404Z","level":"TRACE","fields":{"message":"shut down IO complete"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.575877Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.578399Z","level":"TRACE","fields":{"message":"received 0 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:14.582065Z","level":"TRACE","fields":{"message":"parse eof"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:14.584059Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.592402Z","level":"DEBUG","fields":{"message":"read eof"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.596692Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.602727Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.605221Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.607475Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Closed, writing: Closed, keep_alive: Disabled }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.612915Z","level":"TRACE","fields":{"message":"shut down IO complete"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.871986Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.872988Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.908802Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:14.909685Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.379479Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.380271Z","level":"TRACE","fields":{"message":"received 588 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:17.381053Z","level":"TRACE","fields":{"message":"Request.parse","bytes":588},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:51:17.381757Z","level":"TRACE","fields":{"message":"Request.parse Complete(588)"},"target":"hyper::proto::h1::role","span":{"name":"parse_headers"},"spans":[{"name":"parse_headers"}]}
{"timestamp":"2022-08-25T14:51:17.382473Z","level":"DEBUG","fields":{"message":"parsed 14 headers"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:17.383454Z","level":"DEBUG","fields":{"message":"incoming body is empty"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.384747Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.385719Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.425842Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: KeepAlive, writing: Init, keep_alive: Busy }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.448626Z","level":"TRACE","fields":{"message":"Server::encode status=200, body=Some(Known(320)), req_method=Some(GET)"},"target":"hyper::proto::h1::role","span":{"name":"encode_headers"},"spans":[{"name":"encode_headers"}]}
{"timestamp":"2022-08-25T14:51:17.449823Z","level":"TRACE","fields":{"message":"sized write, len = 320"},"target":"hyper::proto::h1::encode"}
{"timestamp":"2022-08-25T14:51:17.450510Z","level":"TRACE","fields":{"message":"buffer.queue","self.len":230,"buf.len":320},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:17.451692Z","level":"DEBUG","fields":{"message":"flushed 550 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:17.452512Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Idle }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.453704Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:17.454689Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Init, writing: Init, keep_alive: Idle }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.784097Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.796634Z","level":"TRACE","fields":{"message":"received 0 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.802525Z","level":"TRACE","fields":{"message":"parse eof"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.809497Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.811692Z","level":"DEBUG","fields":{"message":"read eof"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.814971Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.819885Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.822371Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.824185Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Closed, writing: Closed, keep_alive: Disabled }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.826218Z","level":"TRACE","fields":{"message":"shut down IO complete"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.834919Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.864747Z","level":"TRACE","fields":{"message":"received 0 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.869939Z","level":"TRACE","fields":{"message":"parse eof"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.873389Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.874247Z","level":"DEBUG","fields":{"message":"read eof"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.876556Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.877859Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.883773Z","level":"TRACE","fields":{"message":"State::close_write()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.884929Z","level":"TRACE","fields":{"message":"flushed({role=server}): State { reading: Closed, writing: Closed, keep_alive: Disabled }"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.885903Z","level":"TRACE","fields":{"message":"shut down IO complete"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.888098Z","level":"TRACE","fields":{"message":"Conn::read_head"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.889093Z","level":"TRACE","fields":{"message":"received 0 bytes"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.890379Z","level":"TRACE","fields":{"message":"parse eof"},"target":"hyper::proto::h1::io"}
{"timestamp":"2022-08-25T14:51:25.891692Z","level":"TRACE","fields":{"message":"State::close_read()"},"target":"hyper::proto::h1::conn"}
{"timestamp":"2022-08-25T14:51:25.893183Z","level":"DEBUG","fields":{"message":"read eof"},"target":"hyper::proto::h1::conn"}
