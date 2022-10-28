import Link from 'next/link';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import useMedia from '../../../libs/hooks/common/useMedia';
import { media } from '../../../styles';

export default function FooterCopyright() {
  const isSmall = useMedia('(max-width: 480px)');

  return (
    <Container>
      <Layout>
        <Contents>
          <ContentItem className="logo">
            <Link href="/">
              <img src="/images/logo2.png" alt="Logo" />
            </Link>
          </ContentItem>

          <ContentItem className="copy">
            {isSmall ? (
              <p>
                <p>Copyright(c) 2021. All Rightreserved.</p>
                <p>
                  <strong>사업자등록번호</strong> 640-88-02162
                </p>
                <p>
                  <strong>통신판매업신고</strong> 제2021-다산-0477
                </p>
              </p>
            ) : (
              <p>
                Copyright(c) 2021. All Right Reserved.{' '}
                <strong>사업자 등록번호</strong> 640-88-02162{' '}
                <strong>통신판매업신고</strong> 제2021-다산-0477
              </p>
            )}
          </ContentItem>

          <ContentItem className="link">
            <EtcLink>
              <ul>
                <li>
                  <MdKeyboardArrowRight />
                  <Link href="/faq">
                    <a>FAQ's</a>
                  </Link>
                </li>
                <li>
                  <MdKeyboardArrowRight />
                  <Link href="/term">이용약관</Link>
                </li>
                <li>
                  <MdKeyboardArrowRight />
                  <Link href="/privacy">개인정보처리방침</Link>
                </li>
              </ul>
            </EtcLink>
          </ContentItem>
        </Contents>
      </Layout>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: block;
  background: #1c2023;
`;

const Layout = styled.div`
  max-width: 1110px;
  width: 100%;
  padding: 0.5rem 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 24px;
  padding-bottom: 24px;
  ${media.small} {
    display: block;
    text-align: center;
  }
`;

const ContentItem = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-start;
  align-items: center;
  ${media.small} {
    display: inline-block;
    flex: none !important;
    max-width: 100% !important;
    margin-bottom: 1.25rem;
  }
  &.logo {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  &.copy {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    p {
      font-size: 0.75rem;
      line-height: 26px;
      margin: 0;
      padding: 0;
      color: #555;
      strong {
        color: #c5c5c5;
      }
    }
  }
  &.link {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    justify-content: flex-end;
  }
  img {
    height: 32px;
  }
`;

const EtcLink = styled.nav`
  font-size: 12px;
  color: #777;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      position: relative;
      line-height: 12px;
      margin: 0;
      padding: 0 8px;
      margin-right: 1rem;
      svg {
        position: absolute;
        top: 0px;
        left: -6px;
      }
      a {
        transition: 0.12s all;
      }
      a:hover {
        color: white;
      }
    }
  }
`;
