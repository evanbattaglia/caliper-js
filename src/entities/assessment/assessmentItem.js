/**
 *  author: Prashant Nayak
 *  ©2013 IMS Global Learning Consortium, Inc.  All Rights Reserved.
 *  For license information contact, info@imsglobal.org
 */

var _ = require('lodash-node');
var AssignableDigitalResource = require('../assignable/assignableDigitalResource');

function AssessmentItem(id, type) {

  AssignableDigitalResource.call(this);

  this.setId(id);
  this.setType(this.Types.ASSESSMENT_ITEM);

  this.setProperties({});
}

AssessmentItem.prototype = _.create(AssignableDigitalResource.prototype);


module.exports = AssessmentItem;