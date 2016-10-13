/**
 * Created by wangyiping1 on 16/10/13.
 */
import Localization from '../resource/localization.json';

exports.getLocalString = function (str, language) {
    return Localization[str][language] || str;
}
