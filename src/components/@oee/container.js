import { SelectInput, ColorInput } from '../../inputs/inputs';
import { bgcolorClasses, bgcolorSelectOptions } from '../common';

const container = {
    classes: ["container", "container-fluid"],
    image: "icons/container.svg",
    html: '<div class="container dropzone"><div class="m-5">Container</div></div>',
    name: "Container",
    properties: [
        {
            name: "Type",
            key: "type",
            htmlAttr: "class",
            inputtype: new SelectInput(),
            validValues: ["container", "container-fluid"],
            data: {
                options: [{
                    value: "container",
                    text: "Default"
                }, {
                    value: "container-fluid",
                    text: "Fluid"
                }]
            }
        },
        {
            name: "Background",
            key: "background",
            htmlAttr: "class",
            validValues: bgcolorClasses,
            inputtype: new SelectInput(),
            data: {
                options: bgcolorSelectOptions
            }
        },
        {
            name: "Background Color",
            key: "background-color",
            htmlAttr: "style",
            inputtype: new ColorInput(),
        },
        {
            name: "Text Color",
            key: "color",
            htmlAttr: "style",
            inputtype: new ColorInput(),
        }],
};

export default container;

