import { connect } from 'react-redux';
import {View} from 'react-native';
import Button from '../components/StyledButton.js';
import styles from '../styles/toolbarStylesheet.js';
import Images from '../Images/Images';
import {toggleSortInRedux} from '../store/reducers/SortReducer.js';
import Constants from '../Constants.js';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
    const handleFilter = () => {
        console.log("filter clicked");
    }

    const getSortButton = () => {
        return (
            props.isSortAvailable ?
                <Button 
                    title="Sort" 
                    icon={props.currentSort === Constants.ASCENDING ? Images.upArrow : Images.downArrow} 
                    buttonStyle={styles.toolbarButton} 
                    textStyle={styles.toolbarText} 
                    onPress={() => props.toggleSortInRedux()}/>
                : null
        )
    }

    return (
        <View style={styles.toolbar}>
            {/* Filter button is always present in toolbar */}
            <Button title={"Filter"} 
                icon={Images.filter} 
                buttonStyle={styles.toolbarButton} 
                textStyle={styles.toolbarText} 
                onPress={handleFilter}/>

            {/* Sort button is only visible if prop is true */}
            {getSortButton()}
        </View>
    );
}

Toolbar.propTypes = {
    isSortAvailable: PropTypes.bool,
}

const mapStateToProps = state => {
    return {
      currentSort: state.sortReducer.currentSort,
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        toggleSortInRedux: (sort) => dispatch(toggleSortInRedux(sort)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);