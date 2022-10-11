import { render, screen } from '@testing-library/react';
import TopSection from '../../../../componenets/main/courseTube/video/topSection/TopSection';
import coursesData from '../../../../data/coursesData';

const topSectionProps = {
  videoLink: coursesData[0].courses[0].courseLink,
  videoImg: '/img/instructors/Bro Code/javascript.webp',
  videoAlt: coursesData[0].courses[0].category,
  videoDuration: coursesData[0].courses[0].courseDuration,
};

function createElements({ topSectionDiv, acnhorTag, videoImg, videoDuration }) {
  const elementsArray = [];
  if (topSectionDiv) {
    const topSectionDivElement = screen.getByTestId('top-section');
    elementsArray.push(topSectionDivElement);
  }
  if (acnhorTag) {
    const anchorTagElement = screen.getByTestId('top-anchor-tag');
    elementsArray.push(anchorTagElement);
  }
  if (videoImg) {
    const imgElement = screen.getByTestId('video-img');
    elementsArray.push(imgElement);
  }
  if (videoDuration) {
    const videoDurationElement = screen.getByTestId('video-duration');
    elementsArray.push(videoDurationElement);
  }

  return elementsArray;
}

describe('TopSection', () => {
  beforeEach(() => {
    render(<TopSection {...topSectionProps} />);
  });

  test('should render the TopSection', () => {
    const [topSectionDiv] = createElements({
      topSectionDiv: true,
    });
    expect(topSectionDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    test('should render the TopSection components: acnhorTag, videoImg, videoDuration', () => {
      const [acnhorTag, videoImg, videoDuration] = createElements({
        acnhorTag: true,
        videoImg: true,
        videoDuration: true,
      });
      expect(acnhorTag).toBeInTheDocument();
      expect(videoImg).toBeInTheDocument();
      expect(videoDuration).toBeInTheDocument();
    });

    test('should render video link as the acnhorTag href', () => {
      const [acnhorTag] = createElements({ acnhorTag: true });
      expect(acnhorTag).toHaveAttribute(
        'href',
        'https://www.youtube.com/watch?v=8dWL3wF_OMw&t=12s'
      );
    });

    test("should render the video img src as the videoImg src & the it's alt should be javascript", () => {
      const [videoImg] = createElements({ videoImg: true });
      expect(videoImg).toHaveAttribute(
        'src',
        '/img/instructors/Bro Code/javascript.webp'
      );
      expect(videoImg).toHaveAttribute('alt', 'javascript');
    });

    test("should render the video duration element with the video duration as it's text", () => {
      const [videoDuration] = createElements({ videoDuration: true });
      expect(videoDuration).toHaveTextContent('8:00:00');
    });
  });
});
