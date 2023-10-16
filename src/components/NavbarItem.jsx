
import React from 'react';
import PropTypes from 'prop-types';

NavbarItem.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
};

function NavbarItem({label, active}) {
    return (
        <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
            {label}
        </div>
    );
}

export default NavbarItem;
