/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var _ = require('lodash');
var Agent = require('./agent');
var entityType = require('../entityType');

/**
 * Represents an LTI W3C Organization.
 * Organization's prototype set to Entity.
 * @constructor
 * @param {string} id URI
 * @param {Object} props Optional property settings
 * @property {Object} subOrganizationOf Parent Organization Object
 * @extends Agent
 */
function Organization(id, props) {
  props = props || {};

  Agent.call(this, id, props);
  this.setType(entityType.ORGANIZATION);
  if (props.hasOwnProperty("subOrganizationOf")) {
    this.setSubOrganizationOf(props.subOrganizationOf);
  }
}

// Inherit from the prototype and assign additional properties to the object per the model as required.
Organization.prototype = _.create(Agent.prototype, {
  setSubOrganizationOf: function(subOrganizationOf) {
    this.subOrganizationOf = subOrganizationOf;
  }
});

module.exports = Organization;