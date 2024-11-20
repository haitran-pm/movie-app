import {
  Skeleton,
  styled,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Container,
  Grid2,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import TrendingBg from "../../assets/trending-bg.svg";

export const HomeBanner = styled(Paper)(
  ({ theme }) => `
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  background-color: ${theme.palette.primary.main};
  max-width: 1300px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
);

export const HomeBannerSkeleton = styled(Skeleton)`
  max-width: 1300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #032541;
  &:after {
    background: linear-gradient(
      90deg,
      transparent,
      rgb(255 255 255 / 20%),
      transparent
    );
  }
`;

export const StyledInputBase = styled(InputBase)`
  width: 100%;
  height: 46px;
  lineheight: 46px;
  fontsize: 17px;
  color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 30px;
  padding: 0 20px;
  background-color: #fff;
`;

export const StyledSearchButton = styled(Button)`
  height: 46px;
  padding-left: 26px;
  padding-right: 26px;
  border: 0;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  &:hover {
    color: #032541;
  }
  font-size: 17px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme, darktheme }) => `
  height: 30px;
  border-radius: 30px;
  border-width: 1px;
  border-style: solid;
  ${
    darktheme
      ? `
    border-color: #1ed5a9;
  `
      : `
    border-color: ${theme.palette.primary.main};
  `
  }
`
);

export const StyledToggleButton = styled(ToggleButton)(
  ({ theme, darktheme }) => `
  ${
    darktheme
      ? `
    color: #ffffff;
  `
      : `
    color: ${theme.palette.primary.main};
  `
  }
  border-radius: 30px;
  border: none;
  padding: 0 20px;
  &:hover {
    background-color: transparent;
  }
  &.Mui-selected {
    position: relative;
    border-radius: 30px;

    ${
      darktheme
        ? `
      background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
    `
        : `
      background: ${theme.palette.primary.main};
      background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      background-color: #000;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      pointer-events: none;
      border-radius: 30px;
    }
  }
`
);

export const StyledHeadline = styled(Box)(
  ({ darktheme }) => `
  max-width: 1300px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  gap: 20px;
  align-items: center;
  ${
    darktheme &&
    `
    & h2 {
      color: #fff;
    }
    `
  }
  
`
);

export const StyledScrollBox = styled(Box)`
  position: relative;
  overflow-x: scroll;
  padding-bottom: 24px;
  &::-webkit-scrollbar {
    width: auto;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #efefef;
    border-radius: 20px;
  }
`;

export const StyledSectionTrending = styled(Container)`
  max-width: 1300px;
  padding-left: 0;
  padding-right: 0;
  background-image: url("${TrendingBg}");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledScrollBoxInner = styled(Grid2)`
  display: -webkit-box;
  flex-wrap: nowrap;
  padding-left: 40px;
  padding-right: 40px;
  gap: 20px;
`;

export const StyledSectionPopular = styled(Container)`
  max-width: 1300px;
  padding-left: 0;
  padding-right: 0;
`;

export const StyledSectionTrailer = styled(Container)(
  ({ background }) => `
  max-width: 1300px;
  padding-left: 0;
  padding-right: 0;
  background-color: #060915;
  background-image: url("${background}");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`
);
