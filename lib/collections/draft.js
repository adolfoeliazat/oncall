/**
 * Created by bwhitten on 1/23/15.
 */

/**
 * Collection which is shared between clients. This holds app state to whether or not a draft
 * is currently ongoing.
 *
 * @type {Mongo.Collection}
 */
Draft = new Mongo.Collection('draft');
