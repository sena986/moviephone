import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <SlideContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SlideContainer>
        <Container>
          <Title title={"Popular Movies"} />
          <ScrollView
            style={{ marginTop: 20, marginBottom: 40 }}
            contentContainerStyle={{ paddingLeft: 30 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popular.map((movie) => (
              <Vertical
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={"Coming Soon"}></Title>
          <UpcomingContainer>
            {upcoming.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </UpcomingContainer>
        </Container>
      </>
    )}
  </ScrollView>
);
