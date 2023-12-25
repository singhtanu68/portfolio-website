import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";
import { ServerStyleSheets } from "@mui/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Rezume Free Template by Colorlib</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />{" "}
          {/* Include the correct path for your favicon */}
          <link rel="stylesheet" href="/assets/css/animate.css" />{" "}
          {/* Use the correct path */}
          <link rel="stylesheet" href="/assets/css/flexslider.css" />
          <link rel="stylesheet" href="/assets/fonts/icomoon/style.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script src="js/vendor/jquery.min.js"></script>
          <script src="js/vendor/jquery-migrate-3.0.1.min.js"></script>
          <script src="js/vendor/popper.min.js"></script>
          <script src="js/vendor/bootstrap.min.js"></script>
          <script src="js/vendor/jquery.easing.1.3.js"></script>
          <script src="js/vendor/jquery.stellar.min.js"></script>
          <script src="js/vendor/jquery.waypoints.min.js"></script>
          <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
          <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
          <script src="js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
