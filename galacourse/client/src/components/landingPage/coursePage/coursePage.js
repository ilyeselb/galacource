import React, { useEffect, useRef, useState } from "react";
import { Card, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import axios from "axios";

const CoursePage = (props) => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const videoRef = useRef();
  const previousUrl = useRef(video);

  useEffect(() => {
    if (previousUrl.current === video) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = video;
  }, [video]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/courses/video/" + props.match.params.title)
      .then((vid) => {
        setVideos([...vid.data]);
        setVideo(
          "http://localhost:8080/courses/" +
            props.match.params.title +
            "/" +
            vid.data[0].title
        );
      });
  }, []);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={9}>
          <video ref={videoRef} width="900" height="420" controls autoPlay>
            <source src={video} />
          </video>
        </Grid>
        <Grid item md={3}>
          <Card>
            <List
              component="nav"
              aria-label="contacts"
            >
                {videos.map((vid, index) => (<ListItem key={index}   onClick={() =>
                        setVideo(
                          "http://localhost:8080/courses/" +
                            props.match.params.title +
                            "/" +
                            vid.title
                        )
                      } button>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={vid.title.split('.').slice(0, -1).join('.')}/>
              </ListItem> ))}
              
            </List>
            {/* <List subheader={<li />}>
              {videos.map((vid, index) => (
                <li key={`${index}`}>
                  <ul>
                    <ListSubheader
                      onClick={() =>
                        setVideo(
                          "http://localhost:8080/courses/" +
                            props.match.params.title +
                            "/" +
                            vid.title
                        )
                      }
                    >
                      {` ${vid.title}`}
                    </ListSubheader>
                  </ul>
                </li>
              ))}
            </List> */}
          </Card>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default CoursePage;
