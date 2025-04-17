import st from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={st.footer}>
        <div className={st.footContainer}>
            <p>Cinema is always waiting for you. Come back to discover new genres and stories!</p>
            <p>Copyright © 2025 Popcorn. All Rights Reserved. Created by Hak0bian</p>
        </div>
    </footer>
  )
}

export default Footer