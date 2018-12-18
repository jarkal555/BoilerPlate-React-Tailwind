import React from 'react';
import Styler from '../../utils/styler';

const withStyler = (WrappedComponent, styles) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            
            this.styler = new Styler(this.props.className);
            this.styler.setStyles(styles);
        }
        
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    styler={this.styler}
                />
            );
        }
    }
};

export default withStyler;