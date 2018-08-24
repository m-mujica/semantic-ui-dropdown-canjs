import callbacks from 'can-view-callbacks';
import domMutate from "can-dom-mutate";
import kebabCase from 'lodash.kebabcase';
import $ from 'jquery';
import 'semantic-ui-transition/transition';
import 'semantic-ui-transition/transition.css';
import 'semantic-ui-dropdown/dropdown.css';
import 'semantic-ui-dropdown/dropdown';

// import 'semantic-ui-transition/transition';

/**
 * A can.view.attr wrapper around SemanticUI Dropdown. Settings can be defined as "semantic"-prefixed attributes.
 *
 * Note: Semantic-UI CSS should be imported separately, but this module includes the dropdown css.
 *
 * Example:
 *    With default settings:
 *    <input type="text" semantic-dropdown />
 */
callbacks.attr('semantic-dropdown', function(el, attrData) {
  let attrs = getConfigObjFromAttrs(el),
    options = getDropdownSettingsFromConfig(attrs),
    $el = $(el);

  function updateAttributes(ev){
    if (ev.attributeName === 'show') {
      let attrs = getConfigObjFromAttrs(ev.target);
      if (attrs.show) {
        $el.dropdown('show');
      } else {
        $el.dropdown('hide');
      }
    }
  }

  domMutate.onNodeAttributeChange(el, updateAttributes);
  $el.dropdown(options);
});

function getConfigObjFromAttrs(el){
  let attributes = [].slice.call(el.attributes || []);
  let attrObj = {};
  attributes.map(attr => {
    attrObj[attr.name] = attr.value;
    if (attrObj[attr.name] === '') {
      attrObj[attr.name] = true;
    }
  });
  return attrObj;
}

function getDropdownSettingsFromConfig(config) {
  const dropdownSettings = $.fn.dropdown.settings || {};
  let settings = {};

  for(let setting in dropdownSettings) {
    let hyphenatedSetting = kebabCase(setting);

    if(config.hasOwnProperty(hyphenatedSetting)) {
      settings[setting] = config[hyphenatedSetting];
    }
  }
  return settings;
}