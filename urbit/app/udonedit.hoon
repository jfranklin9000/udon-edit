/+  *server, cram
/=  index
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/udonedit/index
  /|  /html/
      /~  ~
  ==
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/udonedit/js/tile
  /|  /js/
      /~  ~
  ==
/=  script
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/udonedit/js/index
  /|  /js/
      /~  ~
  ==
/=  style
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/udonedit/css/index
  /|  /css/
      /~  ~
  ==
:: This iterates over item in the img directory, takes their filenames
:: at @tas (knots), takes the file as @ (binary) and runs it through the 
:: png mark.
/=  udonedit-png
  /^  (map knot @)
  /:  /===/app/udonedit/img  /_  /png/
::
=,  format
|%
:: +move: output effect
::
+$  move  (pair bone card)
::
+$  poke
  $%  [%launch-action [@tas path @t]]
  ==
:: +card: output move payload
::
+$  card
  $%  [%poke wire dock poke]
      [%http-response =http-event:http]
      [%connect wire binding:eyre term]
      [%diff %json json]
  ==
::
+$  state  $:  source=cord  ::  udon
               object=cord  ::  html
           ==
::  ++  empty  `state`['' '']
::  hint to the new user on how to use..
++  empty  ^-  state  :-
      '# header\0a\0asome text\0a'
      '<div><h1 id="header-">header </h1><p>some text </p></div>'
::
--
::
|_  [bol=bowl:gall state]
::
++  this  .
::
++  init
  |=  s=state
  ::  ~&  [%init s]
  ^-  (quip move _this)
  =/  launcha
    [%launch-action [%udonedit /udonedittile '/~udonedit/js/tile.js']]
  :_  this(source source.s, object object.s)
  :~
    [ost.bol %connect / [~ /'~udonedit'] %udonedit]
    [ost.bol %poke /udonedit [our.bol %launch] launcha]
  ==
::
::  +prep: set up the app
::
++  prep
  ::  doesn't handle changes to +$state spec - XX
  |=  old=(unit state)
  ~&  [%prep old=`(unit state)`old]
  ^-  (quip move _this)
  =/  s=state  empty
  ?~  old                  ::  happens after |start
    ~&  %old-state-none
    (init s)
  ::  fix me - mint-vain - XX
  ::  no, it makes sense
  ::  ?~  u.old                ::  start from nothing
  ::    ~&  %old-state-sig
  ::    (init s)
  (init s(source source.u.old, object object.u.old))
::
++  prep-reset  ::  for development
  |=  old=*
  ~&  [%old old]
  (init empty)
::
++  peer-udonedittile  ::  yuck, i would prefer peer-udonedit-tile
  |=  wir=wire
  ~&  [%peer-udonedittile wir]
  ^-  (quip move _this)
  [(send-state-diff ~) this]
::
++  send-tile-diff  ::  rename?
  |=  jon=json
  ::  ~&  [%jon jon]
  ^-  (list move)
  %+  turn  (prey:pubsub:userlib /primary bol)
  |=  [=bone ^]
  [bone %diff %json jon]
::
++  send-state-diff
  |=  ~
  =/  map
    :~  ['source' s+source]
        ['object' s+object]
    ==
  ::  ~&  [%map map]
  =/  json-map=json  o+(my map)
  ::  ~&  [%json-map json-map]
  %-  send-tile-diff
  %-  pairs:enjs:format
  [%state json-map]~
::
++  poke-json
  |=  jon=json
  ::  ~&  [%poke-json jon]
  ^-  (quip move _this)
  =/  json-map  ((om:dejs:format same) jon)
  =/  action    (so:dejs:format (~(got by json-map) %action))
  ::
  ?:  =(action 'preview')
    =/  don=cord  (so:dejs:format (~(got by json-map) %source))
    ::  ~&  [%don don]
    ::  we assume don doesn't have front matter or ;> - XX
    =.  source  don
    ::  +ream chokes on '' and ' ' and probably more
    ::  at least handle '' - XX
    ?:  =(don '')
      =.  object  ''
      [(send-state-diff ~) this]
    ::  add leading ';>\0a' and trailing '\0a' - XX
    =.  don     (crip :(weld ";>\0a" (trip don) "\0a"))
    =.  object  (crip (en-xml:html elm:(static:cram (ream don))))
    [(send-state-diff ~) this]
  ::
  ~&  [%unknown-action action]
  [~ this]
::
::  +peer-messages: subscribe to subset of messages and updates
::
++  peer-primary
  |=  wir=wire
  ~&  [%peer-primary wir]
  ^-  (quip move _this)
  [(send-state-diff ~) this]
::
::  +bound: client tells us we successfully bound our server to the ~udonedit url
::
++  bound
  |=  [wir=wire success=? binding=binding:eyre]
  ^-  (quip move _this)
  [~ this]
::
::  +poke-handle-http-request: serve pages from file system based on URl path
::
++  poke-handle-http-request
  %-  (require-authorization:app ost.bol move this)
  |=  =inbound-request:eyre
  ::  ~&  [%poke-handle-http-request inbound-request]
  ^-  (quip move _this)
  ::
  =+  request-line=(parse-request-line url.request.inbound-request)
  =/  name=@t
    =+  back-path=(flop site.request-line)
    ?~  back-path
      ''
    i.back-path
  ?:  =(name 'tile')
    [[ost.bol %http-response (js-response:app tile-js)]~ this]
  ?+  site.request-line
    :_  this
    [ost.bol %http-response not-found:app]~
  ::
  ::  styling
  ::
      [%'~udonedit' %css %index ~]
    :_  this
    [ost.bol %http-response (css-response:app style)]~
  ::
  ::  javascript
  ::
      [%'~udonedit' %js %index ~]
    :_  this
    [ost.bol %http-response (js-response:app script)]~
  ::
  ::  images
  ::
      [%'~udonedit' %img *]
    =/  img  (as-octs:mimes:html (~(got by udonedit-png) `@ta`name))
    :_  this
    [ost.bol %http-response (png-response:app img)]~
  ::
  ::  inbox page
  ::
     [%'~udonedit' *]
    :_  this
    [ost.bol %http-response (html-response:app index)]~
  ==
::
--
