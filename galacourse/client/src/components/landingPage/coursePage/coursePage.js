import { Card, Grid, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player'

const CoursePage = () => {

    useEffect(() => {
        axios.get("http://localhost:8080/courses/video/"+props.match.params.title).then(course => {
            setCourses(prev => [...course.data])
        })
        console.log(courses);
    },[])
    const video = {
       
        width: "-moz-fit-content",
        width:" fit-content" }
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            > 
           
                 
                <Grid  item md={8}>
                    <Card>
                    <ReactPlayer style={video}  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card >
                        <List subheader={<li />}>
                            {[0, 1, 2, 3, 4].map((sectionId) => (
                                <li key={`section-${sectionId}`} >
                                    <ul >
                                        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                                        {[0, 1, 2].map((item) => (
                                            <ListItem key={`item-${sectionId}-${item}`}>
                                                <ListItemText primary={`Item ${item}`} />
                                            </ListItem>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </List>
                    </Card>

                </Grid>


            </Grid>);
        </div>
    );
};

export default CoursePage;