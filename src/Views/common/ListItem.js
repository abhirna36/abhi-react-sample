import React from 'react';
import PropTypes from 'prop-types';
import Text from "./Text";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

ListItem.propTypes = {
    listItem: PropTypes.any.isRequired
};

function ListItem(props) {
    const { listItem } = props;

    return (
        <Card variant="outlined" style={styles.containerStyle}>
            <CardContent>
                <div>
                    <Text
                        text={listItem.taskDescription}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
const styles = {
    containerStyle: {
        margin: 7
    }
};

export default ListItem;