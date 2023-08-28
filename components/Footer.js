
export const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"
    }}>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QM24P8BHT4HJE" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_IT/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>{" "}
      Built with Nextra and Next.js
    </div>
  )
}
