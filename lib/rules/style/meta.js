'use strict';

/**
 * Check the presence of this <code>meta</code> tag in the head of the page:
 * <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;</code>
 */

exports.name = "style.meta";

var mvp = require('metaviewport-parser');

var width = /^device\-width$/i
,   shrinkToFit = /^no$/i
;

exports.check = function (sr, done) {
    var meta = sr.$("head > meta[name='viewport'][content]");
    if (!meta || 1 !== meta.length) {
        sr.error(this.name, "not-found");
    }
    else {
	var props = mvp.parseMetaViewPortContent(meta.attr('content'));
	if (!props ||
	    0 !== Object.keys(props.invalidValues).length ||
	    2 !== Object.keys(props.validProperties).length ||
	    !props.validProperties['width'] ||
	    !width.test(props.validProperties['width']) ||
	    !props.validProperties['initial-scale'] ||
	    1 !== props.validProperties['initial-scale'] ||
	    1 !== Object.keys(props.unknownProperties).length ||
	    !props.unknownProperties['shrink-to-fit'] ||
	    !shrinkToFit.test(props.unknownProperties['shrink-to-fit'])) {
            sr.error(this.name, "not-found");
	}
    }
    done();
};