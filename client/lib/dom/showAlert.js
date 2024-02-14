
import { isString } from "../utils/typeOf.js";
import { addClass,removeClass } from "./css.js";
import { getNode } from "./getNode.js";


/**
 * 에러 메세지를 보여주는 함수
 * @param {HTMLElement | String} node 
 * @param {String} message 
 * @param {Number} timeout
 * @returns {void}
 */

export function showAlert(node,message='error',timeout=1000){
    if(isString(node)) node = getNode(node);

    const error = getNode('.alert-error');
    node.textContent = message;

    addClass(node,'is-actve');



    setTimeout(() => {
        removeClass(node,'is-active');
    }, timeout);
}