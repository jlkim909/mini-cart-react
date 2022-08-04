import React from 'react';
import { memo } from 'react';

function Footer() {
    return (
        <footer className="text-center text-gray-500 text-xs pb-6">
            ©2022 Hanameee Corp. All rights reserved.
        </footer>
    );
}

export default memo(Footer);
