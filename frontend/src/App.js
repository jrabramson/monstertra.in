import React, { Component, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import ArcText from "arc-text";
import useFitText from "use-fit-text";
import Draggable from "react-draggable";

import "./app.css";
import PageBG from "./assets/mt_bg.jpg";
import CardIcons from "./assets/cardIcons-sharedassets0.assets-981.png";
import CostIcon from "./assets/unit_ember-sharedassets0.assets-523.png";
import CostBacking from "./assets/spell_emberbacking_normal-sharedassets0.assets-808.png";
import TypePlateImg from "./assets/all_typeplate_normal-sharedassets0.assets-1077.png";
import images from "./assets";

import InputSection from "./Input.js";

function downloadURI(uri, name) {
  var link = document.createElement("a");

  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

const AttrText = styled.span`
  text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
  color: white;
  font-size: 34px;
  position: absolute;
  line-height: 41px;
`;

const Frame = styled.img`
  position: absolute;
  left: 25px;
  top: 23px;
  pointer-events: none;
`;

const Pips = styled.img`
  position: absolute;
  left: calc(50% - 56px);
  top: 3px;
`;

const Rarity = styled.img`
  position: absolute;
  top: 46.5%;
  left: 12px;
`;

const NameplateWrapper = styled.div`
  position: absolute;
  top: 49.5%;
  left: 0;

  & > span {
    width: 100%;
    left: 0;
    top: 3px;
    font-size: 35px;
  }
`;
const Nameplate = ({ name, variant }) => {
  const nameRef = useRef();

  useEffect(() => {
    if (nameRef.current) {
      const arcText = new ArcText(nameRef.current);
      arcText.arc(650);
    }
  }, [nameRef, name]);

  return (
    <NameplateWrapper>
      <img src={images.nameplates[variant]} />
      <AttrText>
        <span ref={nameRef}>{name}</span>
      </AttrText>
    </NameplateWrapper>
  );
};

const TypeplateWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  left: 84px;

  & > span {
    position: absolute;
    left: 0;
    font-size: 18px;
    width: 100%;
    font-weight: 100;
    line-height: 20px;
  }
`;
const Typeplate = ({ type }) => {
  return (
    <TypeplateWrapper>
      <img src={TypePlateImg} />
      <AttrText>{type}</AttrText>
    </TypeplateWrapper>
  );
};

const TextbodyWrapper = styled.div`
  font-size: 21px;

  & > img {
    position: absolute;
    left: 41px;
    bottom: 49px;
  }

  & > p {
    position: absolute;
    left: 41px;
    z-index: 2;
    bottom: 72px;
    height: 110px;
    width: 190px;
    padding: 0px 10px;
    box-sizing: border-box;
    font-family: "Noto Sans SC", Arial, "Helvetica Neue", Helvetica, sans-serif;

    & img {
      display: inline-block !important;
      width: 22px !important;
      vertical-align: middle !important;
      background-color: transparent !important;
    }
  }
`;
const Textbody = ({ text, bodyType }) => {
  const { fontSize, ref } = useFitText(text);

  return (
    <TextbodyWrapper>
      <img src={bodyType} />
      <p
        ref={ref}
        style={{ fontSize, height: 110, width: 190 }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </TextbodyWrapper>
  );
};

const CostWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 64px;
  height: 80px;

  & > span {
    top: 25px;
    left: 1px;
    width: 100%;
  }
`;
const EmberIcon = styled.img`
  height: 80px;
  width: 64px;
  position: absolute;
  top: 0;
  left: 1px;
`;
const Ring = styled.img`
  position: absolute;
  top: 10px;
  left: 0px;
`;
const Cost = ({ amount }) => {
  return (
    <CostWrapper>
      <Ring src={CostBacking} />
      <EmberIcon src={CostIcon} />
      <AttrText>{amount}</AttrText>
    </CostWrapper>
  );
};

const AttackWrapper = styled.div`
  background: url(${CardIcons}) 0 0;
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 0px;
  left: -6px;

  & > span {
    top: 19px;
    left: -3px;
    width: 100%;
  }
`;
const Attack = ({ amount }) => {
  return (
    <AttackWrapper>
      <AttrText>{amount}</AttrText>
    </AttackWrapper>
  );
};

const LifeWrapper = styled.div`
  background: url(${CardIcons}) 0 -80px;
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: -8px;
  right: -12px;

  & > span {
    top: 9px;
    left: 0px;
    width: 100%;
  }
`;
const Life = ({ amount }) => {
  return (
    <LifeWrapper>
      <AttrText>{amount}</AttrText>
    </LifeWrapper>
  );
};

const ImageWrapperContainer = styled.div`
  position: absolute;
  top: ${(props) =>
    props.variant === "unit" || props.variant === "champion"
      ? "34px"
      : props.variant === "spell"
      ? "46px"
      : "42px;"};
  width: 197px;
  height: 225px;
  border-radius: ${(props) =>
    props.variant === "unit" || props.variant === "champion"
      ? "95px 95px 0px 0px"
      : props.variant === "spell"
      ? "0px"
      : "232px 232px 0 0 / 62px 62px 0 0;"};
  left: 40px;
  overflow: hidden;

  & img {
    margin: -100%;
    cursor: pointer;
  }
`;
const ImageWrapper = ({ image, variant }) => {
  return (
    <ImageWrapperContainer variant={variant}>
      <Draggable defaultPosition={{ x: -256, y: 48 }}>
        <img src={`${image}`} draggable={false} />
      </Draggable>
    </ImageWrapperContainer>
  );
};

const AppWrapper = styled.div`
  background: url(${PageBG});
  background-position: 50% 50%;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  background: url(${images.scene.bg});
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  min-width: 1280px;
  min-height: 720px;
  position: relative;
  border: 4px solid white;

  & > img:first-of-type {
    position: absolute;
    width: 1280px;
    top: 47%;
  }

  & > img:nth-of-type(2) {
    position: absolute;
    width: 1280px;
    top: 0px;
    z-index: 99;
    pointer-events: none;
  }

  & > button {
    position: absolute;
    bottom: 20px;
    right: 75px;
    width: 205px;
    height: 80px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      background-image: url(${images.scene.buttonHover});
      background-position: 50% 50%;
      background-size: 108%;
    }

    & > span {
      position: relative;
    }
  }
`;
const PreviewWrapper = styled.div`
  position: absolute;
  width: 276px;
  height: 490px;
  right: 21px;
  top: 115px;
`;
export default class App extends Component {
  state = {
    variant: "unit",
    clan: "hellhorned",
    name: "",
    image: require("./assets/61-uHLw2vVL._AC_SL1239_.jpg"),
    cost: 2,
    attack: 5,
    life: 30,
    type: "DEMON",
    rarity: "common",
    capacity: 1,
    description:
      "<p><br></p><p><strong>Slay</strong>: +5<img src='/assets/health.png' style='width: 300px;' class='fr-fic fr-dib'></p><p><strong>Revenge</strong>:  +1<img data-fr-image-pasted='true' src='/assets/gold.png' style='font-family: Acme, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; width: 300px; max-width: 100%; cursor: pointer; padding: 0px 1px; color: rgb(65, 65, 65); font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(214, 197, 176); text-decoration-style: initial; text-decoration-color: initial;' class='fr-fic fr-dii'>&nbsp;</p>",
  };

  getFrameType() {
    const frameMap = {
      unit: "rounded",
      champion: "rounded",
      spell: "square",
      blight: "square",
    };
    return frameMap[this.state.variant];
  }

  getRarityIcon() {
    if (this.state.variant === "champion") {
      return images.rarity.champion;
    }

    if (this.state.variant === "blight") {
      return "";
    }

    return images.rarity[this.state.rarity];
  }

  getBodyType() {
    if (this.state.variant === "blight") {
      return images.textbody.rounded;
    }

    return images.textbody.square;
  }

  export() {
    html2canvas(document.querySelector("#card-container"), {
      allowTaint: true,
      backgroundColor: "rgba(0,0,0,0)",
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "custom-card.png");
    });
  }

  onChangeValue(key, value) {
    let newState = this.state;
    newState[key] = value;
    this.setState(newState);
  }

  render() {
    const {
      type,
      clan,
      name,
      cost,
      attack,
      life,
      variant,
      rarity,
      capacity,
      description,
      image,
    } = this.state;

    return (
      <AppWrapper>
        <Container>
          <img src={images.scene.counter} />
          <img src={images.scene.awning} />
          <InputSection
            onChange={this.onChangeValue.bind(this)}
            name={name}
            cost={cost}
            variant={variant}
            clan={clan}
            attack={attack}
            life={life}
            type={type}
            rarity={rarity}
            capacity={capacity}
            description={description}
            image={image}
          />
          <PreviewWrapper id="card-container">
            <img src={images.backframes[variant]} />
            <ImageWrapper image={image} variant={variant} />
            {["unit", "champion", "spell"].includes(variant) && (
              <Frame src={images.frames[this.getFrameType()][clan]} />
            )}
            {["unit", "champion"].includes(variant) && (
              <Pips src={images.pips[capacity - 1]} />
            )}
            {["unit", "champion", "spell"].includes(variant) && (
              <Cost amount={cost} />
            )}
            <Textbody
              key={String(description)}
              text={description}
              bodyType={this.getBodyType()}
            />
            <Nameplate name={name} variant={variant} />
            <Rarity src={this.getRarityIcon()} />
            {["unit", "champion"].includes(variant) && (
              <Attack amount={attack} />
            )}
            {["unit", "champion"].includes(variant) && <Life amount={life} />}
            {type && <Typeplate type={type} />}
          </PreviewWrapper>
          <button onClick={this.export}>
            <AttrText>Export</AttrText>
          </button>
        </Container>
      </AppWrapper>
    );
  }
}
