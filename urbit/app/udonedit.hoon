/+  *server
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
--
::
|_  [bol=bowl:gall ~]
::
++  this  .
::
::  +prep: set up the app
::
++  prep
  |=  old=(unit ~)
  ^-  (quip move _this)
  =/  launcha
    [%launch-action [%udonedit /udonedittile '/~udonedit/js/tile.js']]
  :_  this
  :~  [ost.bol %connect / [~ /'~udonedit'] %udonedit]
      [ost.bol %poke /udonedit [our.bol %launch] launcha]
  ==
::
::
++  peer-udonedittile
  |=  wir=wire
  ^-  (quip move _this)
  :_  this
  [ost.bol %diff %json *json]~
::
::  +peer-messages: subscribe to subset of messages and updates
::
::
++  peer-primary
  |=  wir=wire
  ^-  (quip move _this)
  [~ this]
::
::
::  +bound: lient tells us we successfully bound our server to the ~udonedit url
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