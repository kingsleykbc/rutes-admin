import React, { useRef } from 'react';
import { slicer } from '../../functions/functions';
import theme from '../../config/theme';
import Container from './Container';
import IcWarning from 'react-icons/lib/md/warning';
import IcInfo from 'react-icons/lib/md/info-outline';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button';
import Snackbar from './Snackbar';
import { Row } from './Flex';
import Link from 'next/link';

// =======================================================================
//  TEXT
// =======================================================================
export const Text = ({
  children,
  wrap,
  slicedAt,
  color,
  fontStyle,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  alignment,
  isLightText,
  isSmallText,
  isBold,
  responsiveWidth = "800px",
  responsiveFontWeight,
  responsiveFontSize,
  decoration
}) => {
  const text = (slicedAt > 0) ? slicer(children, slicedAt) : children;
  color = (color) ? color : (isLightText) ? theme.colors.lightText : theme.colors.textColor;
  fontWeight = fontWeight ? fontWeight : (isBold) ? "bold" : "normal";
  fontSize = fontSize ? fontSize : (isSmallText) ? "0.9rem" : "1rem";
  responsiveFontWeight = responsiveFontWeight || fontWeight;
  responsiveFontSize = responsiveFontSize || fontSize;
  decoration = decoration || "none";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <span className="Text">
      {text}

      { /* STYLE */}
      <style jsx>{`
        .Text {
          color: ${color};
          font-size: ${fontSize};
          word-wrap: ${wrap ? "break-word" : "normal"};
          word-break: ${wrap ? "break-all" : "normal"};
          font-style:  ${fontStyle || "normal"};
          font-weight: ${fontWeight};
          font-family: ${fontFamily || "'Rubik', Arial, Helvetica, sans-serif"};
          line-height: ${lineHeight || "25px"};
          text-align: ${alignment || "inherit"};
          text-decoration: ${decoration};
        }

        .Text :global(span) {
          color: ${color} !important;
        }

        @media screen and (max-width: ${responsiveWidth}){
          .Text {
            font-weight: ${responsiveFontWeight};
            font-size: ${responsiveFontSize};
          }
        }
      `}</style>
    </span>
  );
};


// =======================================================================
//  PARAGRAPHS
// =======================================================================
export const Par = ({
  children,
  wrap,
  slicedAt,
  color,
  fontStyle,
  fontWeight,
  fontSize,
  lineHeight,
  preWrap,
  alignment,
  isLightText,
  isBold,
  isSmallText
}) => {

  const text = (slicedAt) ? slicer(children, slicedAt) : children;
  const whiteSpace = preWrap ? "pre-wrap" : "normal";

  color = (color) ? color : (isLightText) ? theme.colors.lightText : theme.colors.textColor;
  fontWeight = fontWeight ? fontWeight : (isBold) ? "bold" : "normal";
  fontSize = fontSize ? fontSize : (isSmallText) ? "0.9rem" : "1rem";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <p className="Par">
      {text}

      { /* STYLE  */}
      <style jsx>{`
        .Par {
          color: ${color};
          font-size: ${fontSize || "1rem"};
          line-height: ${lineHeight || "25px"};
          word-wrap: ${wrap ? "break-word" : "normal"};
          word-break: ${wrap ? "break-all" : "normal"};
          font-style:  ${fontStyle || "normal"};
          font-weight: ${fontWeight};
          text-align: ${alignment || "inherit"};
          white-space: ${whiteSpace};
        }
      `}</style>
    </p>
  );
};


// =======================================================================
//  TEXT WITH ICON
// =======================================================================
export const IconText = ({
  children,
  padding,
  display,
  margin,
  align,
  icon,
  iconColor,
  iconSize,
  iconBack,
  iconPadding,
  iconBackColor,
  iconBackSize,
  ...textProps
}) => {
  display = (display === "block") ? "flex" : "inline-flex";
  margin = margin || "0";
  iconPadding = iconPadding || "12px";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="IconText" >
      {icon && <div className="icon">{icon}</div>}
      <Container marginLeft={icon && iconPadding} marginRight={iconBack && iconPadding}>
        <Text {...textProps}>{children}</Text>
      </Container>
      {iconBack && <div className="iconBack">{iconBack}</div>}


      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .IconText {
          display: ${display};
          align-items: ${align || "center"};
          padding: ${padding || "10px"};
          margin: ${margin};
        }

        .icon{
          ${align === "flex-start" && "margin-top: 5px;"}
        }

        .icon :global(svg){
          font-size: ${iconSize || "1.5rem"};
          vertical-align: middle;
          margin-top: -2px;
        }

        .iconBack :global(svg){
          font-size: ${iconBackSize || "1.5rem"};
          vertical-align: middle;
        }

        .icon :global(svg *){
          fill: ${iconColor || theme.colors.primaryColor} !important;
        }

        .iconBack :global(svg *){
          fill: ${iconBackColor || theme.colors.secondaryColor} !important;
        }
      `}</style>
    </div>
  );
};


/**
 * INFO TEXT
 */
export const InfoText = ({ children, icon, isWarning, isMultiline, ...textProps }) => {
  icon = (isWarning) ? <IcWarning /> : <IcInfo />;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <IconText
      icon={icon} align={isMultiline ? "flex-start" : "center"}
      color={theme.colors.lightText}
      iconColor={isWarning ? theme.colors.warningColor : theme.colors.lightText}
      {...textProps}
    >
      {children}
    </IconText>
  );
}


// =======================================================================
//  HIGHLIAGHTED TEXT
// =======================================================================
export const HighlightedText = ({
  responsiveWidth,
  mobileWidth,
  responsivePadding,
  responsiveMargin,
  children,
  width,
  display,
  fillWidth,
  padding,
  color,
  type,
  margin,
  highlightColor,
  hideOverflow,
  ...textProps
}) => {

  /**
   * CSS STYLES
   */
  padding = padding || "8px 20px";
  width = width ? width : fillWidth ? "100%" : "auto";
  margin = margin || "0";
  display = display || "inline-block";
  mobileWidth = mobileWidth || width;
  responsiveWidth = responsiveWidth || "800px";
  responsiveMargin = responsiveMargin || margin;
  responsivePadding = responsivePadding || padding;

  /**
   * WRAP STYLE
   */
  const wrapStyle = (hideOverflow === false) ? `` : `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;

  /**
   * HIGHLIGHT AND TEXT COLOR
   */
  let newColor;
  if (!highlightColor) {
    if (type === "success") {
      newColor = theme.colors.successColor;
      highlightColor = theme.colors.successHighlightColor;
    }
    else if (type === "danger" || type === "error") {
      newColor = theme.colors.dangerColor;
      highlightColor = theme.colors.dangerHighlightColor;
    }
    else {
      newColor = theme.colors.textColor;
      highlightColor = theme.colors.highlightColor;
    }
  }
  color = color || newColor;


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="HighlightedText">
      <Text wrap={false} isBold {...textProps} color={color}>{children}</Text>

      { /* STYLE */}
      <style jsx>{`
        .HighlightedText {
          padding: ${padding};
          margin: ${margin};
          display: ${display};
          width: ${width};
          text-align: center;
          border-radius: 5px;
          background: ${highlightColor};
          ${wrapStyle}
        }

        @media screen and (max-width:${responsiveWidth} ){
          .HighlightedText {
            padding: ${responsivePadding};
            margin: ${responsiveMargin};
            width: ${mobileWidth};
          }
        }
      `}</style>
    </div>
  );
};


// =======================================================================
//  KEY VALUE TEXT
// =======================================================================
export const KeyValText = ({ item, value, display, itemColor, itemFontSize, itemValueSize, itemFontWeight, itemValPadding, margin, ...textComponents }) => {
  display = display || "inline-block";
  itemColor = itemColor || theme.colors.lightText;
  itemValPadding = itemValPadding || "8px";
  margin = margin || "0";
  itemFontSize = itemFontSize || "0.9rem";
  itemFontWeight = itemFontWeight || "bold";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="KeyValText">
      <div className="item">
        <Text color={itemColor} fontSize={itemFontSize} fontWeight={itemFontWeight} >{item}</Text>
      </div>
      <Text fontSize="1rem" {...textComponents}>
        {value}
      </Text>

      { /* STYLE */}
      <style jsx>{`
        .KeyValText {
          display: ${display};
          margin: ${margin};
        }
        .item {
          margin-bottom: ${itemValPadding};
        }
      `}</style>
    </div>
  );
};


// ================================================================================================
//  CODYABLE TEXT
// ================================================================================================
export const CopyableText = ({ margin, isInline, display, children, ...hightedTextProps }) => {
  const snackbarRef = useRef(null);
  margin = margin || "0";
  display = (display) ? display : (isInline) ? "inline-block" : "block";

  // ================================================================================================
  //  UI
  // ================================================================================================
  return (
    <div className="CopyableText">
      <Row wrap={false}>
        <HighlightedText padding="10px" isBold={false} {...hightedTextProps}>{children}</HighlightedText>
        <CopyToClipboard text={children} onCopy={() => snackbarRef.current.openSnackbar({ message: "Copied!" })}>
          <Button margin="0 0 0 10px">Copy</Button>
        </CopyToClipboard>

        <Snackbar ref={snackbarRef} />
      </Row>

      { /* STYLE */}
      <style jsx>{`
        div {
          display: ${display};
          margin: ${margin};
        }
      `}</style>
    </div>
  );
};


// ================================================================================================
//  LINK TEXT
// ================================================================================================
export const LinkText = ({ href, children, ...textProps }) => {
  return (
    <Link href={href}><a>
      <Text {...textProps}>{children} </Text>

      <style jsx>{` a:hover { text-decoration: underline; } `}</style>
    </a></Link>
  );
};
