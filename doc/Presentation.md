
class: center, middle

# Specberus

Denis & Antonio, 23 oct 2014

.right[![Logo](https://raw.githubusercontent.com/w3c/specberus/master/doc/logo-small.png)]

---

# What

Specberus (ˈspɛk bər əs) *n. new* pubrules *automatic checker and documentation tool.*

*Specberus* is expected to replace the [current pubrules tool](http://www.w3.org/2005/07/pubrules) in the near future.

---

# Why

[`http://www.w3.org/2005/07/pubrules`](http://www.w3.org/2005/07/pubrules) has been around for nine years. While it has served us well, there is room for improvement:

--

* Complex maintenance.
* XSLT is not flexible enough.
* There is no clear separation beetween the documentation (*human-readable publication rules*) and the automatic checker (*the software*).

---

# How

In JavaScript, on [Node.js](http://nodejs.org/), with [Bootstrap](http://getbootstrap.com/), [jQuery](http://jquery.com/) and [Mocha](http://mochajs.org/).

---

# How: general architecture

    Specberus
    ├── design
    ├── lib
    │   ├── profiles
    │   └── rules
    ├── node_modules
    ├── public
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   └── js
    ├── test
    │   └── docs
    └── tools

---

# How: *rules*

    Specberus
    ├── design
    ├── lib
    │   ├── profiles
    │   └── rules
    │       ├── dummy
    │       ├── headers
    │       ├── heuristic
    │       ├── links
    │       ├── sotd
    │       ├── structure
    │       ├── style
    │       └── validation
    ├── node_modules
    ├── public
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   └── js
    ├── test
    │   └── docs
    └── tools

---

# How: *profiles*

    "base"
        "TR"
            "WG-NOTE" (identical)
                "FPWG-NOTE" (identical)
            "WD" (identical)
            "PER"
            "RSCND" (identical)
            "PR"
            "CR"
            "FPWD" (identical)
        "IG-NOTE"
            "FPIG-NOTE" (identical)
        "SUBM"
        "MEM-SUBM"
        "TEAM-SUBM"
        "CG-NOTE"
        "FPLC"
        "REC"
        "LC"
    "dummy"

---

# How: unit-testing

    Specberus
    ├── design
    ├── lib
    │   ├── profiles
    │   └── rules
    ├── node_modules
    ├── public
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   └── js
    ├── test
    │   └── docs
    │       ├── dummy
    │       ├── headers
    │       ├── links
    │       ├── sotd
    │       ├── structure
    │       ├── style
    │       └── validation
    └── tools

The tests are all writtent in `test/all-rules.js` and fixtures are available in `test/docs`.

---

# How: dependencies

`# apt-get install`:
* [`nodejs`](http://nodejs.org/)
* [`npm`](http://github.com/isaacs/npm)

--

`$ npm install`  
(but you can do `npm install -d` instead to install all at once):
* [`express`](https://www.npmjs.org/package/express)
* [`safe-url-input-checker`](https://www.npmjs.org/package/safe-url-input-checker)
* [`socket.io`](https://www.npmjs.org/package/socket.io)
* [`superagent`](https://www.npmjs.org/package/superagent)
* [`whacko`](https://www.npmjs.org/package/whacko)

---

# How: dependencies for debugging

Necessary for development, testing and debugging:
* [`expect.js`](https://www.npmjs.org/package/expect.js)
* [`mocha`](https://www.npmjs.org/package/mocha)

--

Nice to have for debugging:
* [`node-debug`](https://www.npmjs.org/package/debug)

---

# How Specberus has improved recently

* Recursive validation of compound documents.
* Better heuristics to detect and check dates, WG's, etc.
* Better output, more detailed feedback to the user:
  * Colour-coding error/warning messages.
  * Informative messages can be displayed, too.
  * Ability to include markup in the output, eg hyperlinks.
* Added a *summary of results*, with internal links.
* Implemented a few new rules.
* Some enhancements related to usability and design.
* Bug-fixing.

---

# When: pending tasks

1. *[Offer help descriptions for all rules and all errors](https://github.com/w3c/specberus/issues/22)* and *[Reproduce documentation from pubrules](https://github.com/w3c/specberus/issues/25)* (related).
2. *[Write command-line client](https://github.com/w3c/specberus/issues/5)*
3. *[The hierarchy of available profiles is hard-coded in the UI](https://github.com/w3c/specberus/issues/51)*
4. *[Track whacko for better support for next/nextAll/prev/prevAll so that we can remove lots of nasty hacks](https://github.com/w3c/specberus/issues/3)*
5. *[Make rule checking more parallelised, notably for network IO](https://github.com/w3c/specberus/issues/1)*
6. *[Expose as HTTP API](https://github.com/w3c/specberus/issues/4)*

---

# When

Switchover from the old publication workflow to the new one (including *Specberus*) is expected [during the first half of 2015?].

---

# Where

## Public project & source code

[On GitHub](https://github.com/w3c/).

There are currently 22 [open issues](https://github.com/w3c/specberus/issues).

--

## Deployments for testing

* Up to `v0.3.3-1`: [`http://pubrules.jit.su/`](http://pubrules.jit.su/).
* From: `V0.4.0` onwards: [`http://cerberus.w3.org/`](http://cerberus.w3.org/).

[Administering our machine for Node.js apps](https://www.w3.org/Systems/nodejs/)

---

# Who

* [Robin](https://github.com/darobin).
* [Denis](https://github.com/deniak).
* [Guillaume](https://github.com/guibbs).
* [Antonio](https://github.com/tripu).
* You!?
