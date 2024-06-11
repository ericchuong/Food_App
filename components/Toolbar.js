import Button from '../components/StyledButton.js';
import styles from '../styles/toolbarStylesheet.js';
import {View, Image} from 'react-native';
import Images from '../Images/Images';

const Toolbar = (props) => {

    const handleFilter = () => {
        console.error("filter clicked");
    }

    const getSortButton = () => {
        return (
            props.isSortAvailable ?
            <Button title="Sort" icon={Images.arrow} buttonStyle={styles.toolbarButton} textStyle={styles.toolbarText} onPress={handleFilter}/>
            : null
        )
    }

    return (
        <View style={styles.toolbar}>
            <Button title={"Filter"} icon={Images.filter} buttonStyle={styles.toolbarButton} textStyle={styles.toolbarText} onPress={handleFilter}/>
            {getSortButton()}
        </View>
    );
}

  export default Toolbar;