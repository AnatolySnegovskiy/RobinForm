function robinForm(headerElement) {
    var bodyForm = document.querySelector(headerElement);

    for (var elem of bodyForm.getElementsByTagName('input')) {
        if (elem.type.toLowerCase() == 'checkbox') {
            elem.setAttribute('onclick', getContentDefaultAttr(elem, 'onclick') + 'checkboxSetter(this);');
        }
        else if (elem.type.toLowerCase() == 'radio') {
            elem.setAttribute('onclick', getContentDefaultAttr(elem, 'onclick') + 'radioSetter(this);');
        } else {
            elem.setAttribute('onkeyup', getContentDefaultAttr(elem, 'onkeyup') + 'inputSetter(this);');
        }
    }

    for (var elem of bodyForm.getElementsByTagName('textarea')) {
        elem.setAttribute('onchange', getContentDefaultAttr(elem, 'onchange') + 'textareaSetter(this);');
    }

    for (var elem of bodyForm.getElementsByTagName('option')) {
        elem.setAttribute('onclick', getContentDefaultAttr(elem, 'onclick') + 'optionSetter(this);');
    }

    for (var elem of bodyForm.getElementsByTagName('select')) {
        elem.setAttribute('onchange', getContentDefaultAttr(elem, 'onchange') + 'selectSetter(this);');
    }
};

function getContentDefaultAttr(elem, attr)
{   
    defaultAttr = elem.getAttribute(attr);

    return defaultAttr != null ? defaultAttr : '';
}

function checkboxSetter(elem) {
    if (elem.checked) {
        elem.setAttribute('checked', 'checked');
    } else {
        elem.removeAttribute('checked');
    }
}

function radioSetter(elem) {
    for (var radios of document.querySelectorAll('[name="'+elem.name+'"]')) {
        radios.removeAttribute('checked');
    }

    elem.setAttribute('checked', 'checked');
}

function inputSetter(elem)
{
    elem.setAttribute('value', elem.value);
}

function textareaSetter(elem)
{
    elem.textContent = elem.value;
}

function optionSetter(elem)
{
    for (var option of elem.parentElement.getElementsByTagName('option')) {
        option.removeAttribute('selected');
    }

    elem.setAttribute('selected', 'selected');
}

function selectSetter(elem)
{
    for (var option of elem.getElementsByTagName('option')) {
        option.removeAttribute('selected');
    }

    elem.querySelector('[value="'+elem.value+'"]').setAttribute('selected', 'selected');
}