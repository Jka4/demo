import {
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Column,
  Text,
  render,
  Body,
} from '@react-email/components';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

// import PlayIcon from './playIcon.svg';

const Email: any = ({ videoCounter, backgroundImage, vertical }: any) => {
  const arr = Array.from(Array(videoCounter).keys());

  const arr1 = [...arr].slice(0, 3);
  const arr2 = [...arr].slice(3, 6);

  const previewWidth = vertical ? 130 : 180;
  const previewHeight = vertical ? 180 : 130;

  const oneVideoPreviewWidth = vertical ? 300 : 500;
  const oneVideoPreviewHeight = vertical ? 500 : 250;

  const playIconUrl = `${process.env.PUBLIC_URL}/images/playIcon.svg`;

  console.log('🚀 ~ playIconUrl:', playIconUrl);

  return (
    <Html
      style={{
        maxWidth: 580,
        border: '1px solid #80808024',
        padding: 20,
      }}
    >
      <Head>
        <title>My email title</title>
        <Preview>My email title</Preview>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Body>
        <Heading
          as="h2"
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginTop: 0,
          }}
        >
          Lorem ipsum
        </Heading>

        <Text
          style={{
            fontSize: 18,
            marginBottom: 40,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloribus ipsam reprehenderit voluptatibus
          ducimus, earum dolor, repudiandae sequi non magni corporis similique ab. Doloribus incidunt numquam atque esse
          laborum. Architecto adipisci sit quibusdam
        </Text>

        <Container
          style={{
            backgroundImage: backgroundImage
              ? `url("https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg")`
              : '',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {arr.length === 1 ? (
            <>
              <Column style={{ padding: 50, margin: 20 }}>
                <Link
                  href="https://example.com"
                  style={
                    {
                      // objectFit: 'cover',
                      // backgroundImage: `url(${PlayIcon})`,
                    }
                  }
                >
                  <div>
                    <img src={playIconUrl} />

                    <Img
                      src="https://broadsay-dev-play.s3.amazonaws.com/64789d7a64436238e65ed52e/media/65a7b2da0de55b57e1a07c17/poster.png"
                      width={oneVideoPreviewWidth}
                      height={oneVideoPreviewHeight}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </Link>
              </Column>
            </>
          ) : (
            <>
              <Row
                style={{
                  height: 220,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                {arr1?.map(() => {
                  return (
                    <Column style={{ padding: 5, margin: 5 }}>
                      <Link href="https://example.com">
                        <Img
                          src="https://broadsay-dev-play.s3.amazonaws.com/64789d7a64436238e65ed52e/media/65a7b2da0de55b57e1a07c17/poster.png"
                          width={previewWidth}
                          height={previewHeight}
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </Link>
                    </Column>
                  );
                })}
              </Row>
              {arr2.length ? (
                <Row
                  style={{
                    height: 220,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20,
                  }}
                >
                  {arr2?.map(() => {
                    return (
                      <Column style={{ padding: 5, margin: 5 }}>
                        <Link href="https://example.com">
                          <Img
                            src="https://broadsay-dev-play.s3.amazonaws.com/64789d7a64436238e65ed52e/media/65a7b2da0de55b57e1a07c17/poster.png"
                            width={previewWidth}
                            height={previewHeight}
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                        </Link>
                      </Column>
                    );
                  })}
                </Row>
              ) : null}
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
};

const App: FC = () => {
  const [videoCounter, setVideoCounter] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState(true);
  const [vertical, setVertical] = useState(false);

  const log = () => {
    const html = render(<Email videoCounter={videoCounter} backgroundImage={backgroundImage} vertical={vertical} />, {
      pretty: true,
    });

    navigator.clipboard.writeText(html);
  };

  const handleChangeBackground = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setBackgroundImage(!backgroundImage);
  };

  const handleChangeVertical = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setVertical(!vertical);
  };

  return (
    <Wrapper>
      <Element>
        <Email videoCounter={videoCounter} backgroundImage={backgroundImage} vertical={vertical} />
      </Element>

      <Controls>
        <CounterChanger>
          <button
            onClick={() => {
              if (videoCounter > 1) {
                setVideoCounter(videoCounter - 1);
              }
            }}
          >
            -
          </button>

          <span>{videoCounter}</span>

          <button
            onClick={() => {
              if (videoCounter < 6) {
                setVideoCounter(videoCounter + 1);
              }
            }}
          >
            +
          </button>
        </CounterChanger>

        <BackgroundImageWrapper onClick={handleChangeBackground}>
          <input type="checkbox" id="background" checked={backgroundImage} />
          <label htmlFor="background">background</label>
        </BackgroundImageWrapper>

        <BackgroundImageWrapper onClick={handleChangeVertical}>
          <input type="checkbox" id="vertical" checked={vertical} />
          <label htmlFor="vertical">vertical</label>
        </BackgroundImageWrapper>

        <button onClick={log}>Copy code </button>
      </Controls>
    </Wrapper>
  );
};

export default App;

const BackgroundImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CounterChanger = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 90vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Element = styled.div`
  padding: 20px;
`;
