import { render, screen } from '@testing-library/react';
import BottomSection from '../../../../componenets/main/courseTube/video/bottomSection/BottomSection';
import coursesData from '../../../../data/coursesData';

const bottomSectionProps = {
  channelLink: coursesData[0].channelLink,
  channelImg: '/img/instructors/Bro Code/logo.jpg',
  channelAlt: coursesData[0].name,
  videoLink: coursesData[0].courses[0].courseLink,
  videoTitle: coursesData[0].courses[0].courseTitle,
  channelName: coursesData[0].name,
  verified: coursesData[0].verified,
  videoDetails: coursesData[0].courses[0].courseDetails,
};

function createElements({
  bottomSectionDiv,
  leftBottomDiv,
  leftAnchorTag,
  channelLogo,
  rightBottomDiv,
  rightVideoLinkAnchorTag,
  videoTitleHeading,
  rightChannelLinkAnchorTag,
  channelDetailsDiv,
  channelName,
  verifiedIcon,
  videoDetails,
}) {
  const elementsArray = [];
  if (bottomSectionDiv) {
    const bottomSectionDivElement = screen.getByTestId('bottom-section');
    elementsArray.push(bottomSectionDivElement);
  }
  if (leftBottomDiv) {
    const leftBottomDivElement = screen.getByTestId('left-bottom');
    elementsArray.push(leftBottomDivElement);
  }
  if (leftAnchorTag) {
    const leftAnchorTagElement = screen.getByTestId('left-anchor-tag');
    elementsArray.push(leftAnchorTagElement);
  }
  if (channelLogo) {
    const channelLogoElement = screen.getByTestId('channel-logo');
    elementsArray.push(channelLogoElement);
  }
  if (rightBottomDiv) {
    const rightBottomDivElement = screen.getByTestId('right-bottom');
    elementsArray.push(rightBottomDivElement);
  }
  if (rightVideoLinkAnchorTag) {
    const rightVideoLinkAnchorTagElement = screen.getByTestId(
      'right-videoLink-anchor-tag'
    );
    elementsArray.push(rightVideoLinkAnchorTagElement);
  }
  if (videoTitleHeading) {
    const videoTitleHeadingElement = screen.getByRole('heading');
    elementsArray.push(videoTitleHeadingElement);
  }
  if (rightChannelLinkAnchorTag) {
    const rightChannelLinkAnchorTagElement = screen.getByTestId(
      'right-channelLink-anchor-tag'
    );
    elementsArray.push(rightChannelLinkAnchorTagElement);
  }
  if (channelDetailsDiv) {
    const channelDetailsDivElement = screen.getByTestId('channel-details');
    elementsArray.push(channelDetailsDivElement);
  }
  if (channelName) {
    const channelNameElement = screen.getByTestId('channel-name');
    elementsArray.push(channelNameElement);
  }
  if (verifiedIcon) {
    const verifiedIconElement = screen.getByTestId('channel-name');
    elementsArray.push(verifiedIconElement);
  }
  if (videoDetails) {
    const videoDetailsElement = screen.getByTestId('video-details');
    elementsArray.push(videoDetailsElement);
  }

  return elementsArray;
}

describe('BottomSection', () => {
  beforeEach(() => {
    render(<BottomSection {...bottomSectionProps} />);
  });

  test('should render the BottomSection', () => {
    const [bottomSection] = createElements({ bottomSectionDiv: true });
    expect(bottomSection).toBeInTheDocument();
  });

  describe('BottomSection Layout', () => {
    describe('LeftBottom', () => {
      test('should render the leftBottom', () => {
        const [leftBottomDiv] = createElements({ leftBottomDiv: true });
        expect(leftBottomDiv).toBeInTheDocument();
      });

      describe('LeftBottom Layout', () => {
        test('should render the leftAnchorTag', () => {
          const [leftAnchorTag] = createElements({
            leftAnchorTag: true,
          });
          expect(leftAnchorTag).toBeInTheDocument();
        });

        test('should render the channelLogo', () => {
          const [channelLogo] = createElements({
            channelLogo: true,
          });
          expect(channelLogo).toBeInTheDocument();
        });

        test('should render channel link as the leftAnchorTag href', () => {
          const [leftAnchorTag] = createElements({ leftAnchorTag: true });
          expect(leftAnchorTag).toHaveAttribute(
            'href',
            'https://www.youtube.com/c/BroCodez'
          );
        });

        test("should render the channelLogo as the channelLogo src & it's alt should be Bro Code", () => {
          const [channelLogo] = createElements({ channelLogo: true });
          expect(channelLogo).toHaveAttribute(
            'src',
            '/img/instructors/Bro Code/logo.jpg'
          );
          expect(channelLogo).toHaveAttribute('alt', 'Bro Code');
        });
      });
    });

    describe('RightBottom', () => {
      test('should render the rightBottom', () => {
        const [rightBottomDiv] = createElements({ rightBottomDiv: true });
        expect(rightBottomDiv).toBeInTheDocument();
      });

      describe('RightBottom Layout', () => {
        describe('VideoTitle', () => {
          test('should render the videoTitle components: rightVideoLinkAnchorTag, videoTitleHeading', () => {
            const [rightVideoLinkAnchorTag, videoTitleHeading] = createElements(
              {
                rightVideoLinkAnchorTag: true,
                videoTitleHeading: true,
              }
            );
            expect(rightVideoLinkAnchorTag).toBeInTheDocument();
            expect(videoTitleHeading).toBeInTheDocument();
          });

          test('should render video link as the rightVideoLinkAnchorTag href', () => {
            const [rightVideoLinkAnchorTag] = createElements({
              rightVideoLinkAnchorTag: true,
            });
            expect(rightVideoLinkAnchorTag).toHaveAttribute(
              'href',
              'https://www.youtube.com/watch?v=8dWL3wF_OMw&t=12s'
            );
          });

          test('should render the course name as the videoTitleHeading text', () => {
            const [videoTitleHeading] = createElements({
              videoTitleHeading: true,
            });
            expect(videoTitleHeading).toHaveTextContent(
              'JavaScript Full Course 🌐【𝙁𝙧𝙚𝙚】'
            );
          });
        });

        describe('ChannelDetails', () => {
          test('should render the ChannelDetails components: rightChannelLinkAnchorTag, channelDetailsDiv,channelName, verifiedIcon', () => {
            const [
              rightChannelLinkAnchorTag,
              channelDetailsDiv,
              channelName,
              verifiedIcon,
            ] = createElements({
              rightChannelLinkAnchorTag: true,
              channelDetailsDiv: true,
              channelName: true,
              verifiedIcon: true,
            });
            expect(rightChannelLinkAnchorTag).toBeInTheDocument();
            expect(channelDetailsDiv).toBeInTheDocument();
            expect(channelName).toBeInTheDocument();
            expect(verifiedIcon).toBeInTheDocument();
          });

          test('should render channel link as the rightChannelLinkAnchorTag href', () => {
            const [rightChannelLinkAnchorTag] = createElements({
              rightChannelLinkAnchorTag: true,
            });
            expect(rightChannelLinkAnchorTag).toHaveAttribute(
              'href',
              'https://www.youtube.com/c/BroCodez'
            );
          });

          test('should render the channel name as the channelName text', () => {
            const [channelName] = createElements({
              channelName: true,
            });
            expect(channelName).toHaveTextContent('Bro Code');
          });
        });

        describe('VideoDetails', () => {
          test('should render the VideoDetails components: videoDetails', () => {
            const [videoDetails] = createElements({ videoDetails: true });
            expect(videoDetails).toHaveTextContent('166K views • 1 month ago');
          });
        });
      });
    });
  });
});
