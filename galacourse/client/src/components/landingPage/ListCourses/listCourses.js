import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
const ListCourses = (props) => {
    const { courses } = props
    const style = {
        display: "flex",
    }
    const listCourses = courses.map(course => <Grid key={course.id} item xs>
        <Link  to={`/video/${course.title}`} params={{ title: course.title }}>
            <Card >
                <CardContent style={style}>
                    <FolderIcon />
                    <Typography color="textSecondary" gutterBottom>
                        {course.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </Grid>)
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            {listCourses}
        </Grid>)
};

export default ListCourses;