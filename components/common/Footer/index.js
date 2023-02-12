import Image from "@components/common/Image";
import useFooterColor from "@hooks/useFooterColor";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { footerColor } = useFooterColor();
  return (
    <footer className={`${styles.container} ${styles[footerColor]}`}>
      <div className={styles.content}>
        <p>Copyright &copy; 2022 Joinhere All right reserved</p>
        <p>
          Contribute to this project{" "}
          <a href="https://github.com/orgs/join-here/repositories" target="_blank" rel="noopener noreferrer">
            <Image src="/common/github.svg" width={28} height={28} alt="깃허브 링크" />
          </a>
        </p>
      </div>
    </footer>
  );
}
