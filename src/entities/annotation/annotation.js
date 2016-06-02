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
var Entity = require('../entity');
var entityType = require('../entityType');

/**
 * Represents Annotation.  
 * Annotation's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {Object} props Optional property settings
 * @property {string} annotated Annotated Object identifier
 * @property {string} actor Actor identifier
 * @extends Entity
 */
function Annotation(id, props) {
  props = props || {};

  Entity.call(this, id, props);
  this.setType(entityType.ANNOTATION);
  if (props.hasOwnProperty("actor")) {
    this.setActor(props.actor);
  }
  if (props.hasOwnProperty("annotated")) {
    this.setAnnotated(props.annotated);
  }
}

// Inherit from the prototype and assign additional properties to the object per the model as required.
Annotation.prototype = _.create(Entity.prototype, {
  setAnnotated: function(annotated) {
    this.annotated = annotated;
  },
  setActor: function(actor) {
    this.actor = actor;
  }
});

module.exports = Annotation;