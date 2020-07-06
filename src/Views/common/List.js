import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

List.propTypes = {
    list: PropTypes.any.isRequired
};

const renderRow = (list) => {
    return (
        list.map((item, index) => {
            return (
                <ListItem key={index} listItem={item}>
                </ListItem>
            );
        }));
};

function List(props) {
    const { list } = props;
    return (
        renderRow(list)
    );
}

export default List;