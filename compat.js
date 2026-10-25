import Clutter from 'gi://Clutter';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

const SHELL_MAJOR = Number.parseInt(Config.PACKAGE_VERSION.split('.')[0], 10);

/**
 * Constructor props for a vertical or horizontal St.BoxLayout.
 *
 * GNOME 51 removed St.BoxLayout:vertical in favour of :orientation, while
 * GNOME 46 only has :vertical.
 *
 * @param {boolean} vertical
 * @returns {object}
 */
export function boxLayoutOrientation(vertical) {
    if (SHELL_MAJOR >= 51) {
        return {
            orientation: vertical
                ? Clutter.Orientation.VERTICAL
                : Clutter.Orientation.HORIZONTAL,
        };
    }
    return { vertical };
}
