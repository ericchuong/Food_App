import { Popup } from 'react-native-popup-confirm-toast';
import Constants from '../Constants';

export function showPopup(popupType, name) {
    let type;
    let title;
    let text;

    switch(popupType) {
        case 'confirm':
            type = 'success';
            title = 'Success!';
            text = 'Added "' + name + '"';
            break;
        case 'error':
            type = 'danger';
            title = 'Error!';
            text = 'Unable to add "' + name + '"';
            break;
        case 'duplicate':
            type = 'warning';
            title = 'Error!';
            text = '"' + name + '" already exists.';
            break;
        case 'emptyName':
            type = 'warning';
            title = 'Error!';
            text = 'Cannot save empty name';
            break;
        case 'emptyCategory':
            type = 'warning';
            title = 'Error!';
            text = 'Cannot save without a category';
            break;
    }

    return (
        Popup.show({
            type: type,
            title: title,
            textBody: text,
            buttonEnabled: false,
            timing: Constants.POPUP_TIMING_MSEC
        })
    )
}