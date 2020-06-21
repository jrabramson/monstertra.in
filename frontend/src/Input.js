import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import images from "./assets";

function insertIcon(quill, name) {
  const selection = quill.getSelection();
  if (!selection) {
    return;
  }

  const cursorPosition = selection.index;
  quill.insertEmbed(cursorPosition, "image", `/assets/${name}.png`);
  quill.setSelection(cursorPosition + 1);
}

const editorModules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertAttack: function() { insertIcon(this.quill, 'attack') },
      insertHealth: function() { insertIcon(this.quill, 'health') },
      insertBurnout: function() { insertIcon(this.quill, 'burnout') },
      insertCapacity: function() { insertIcon(this.quill, 'capacity') },
      insertConsumed: function() { insertIcon(this.quill, 'consumed') },
      insertEmber: function() { insertIcon(this.quill, 'ember') },
      insertGold: function() { insertIcon(this.quill, 'gold') },
      insertRage: function() { insertIcon(this.quill, 'rage') },
    },
    clipboard: {
      matchVisual: false,
    },
  },
};

const ImageInput = styled.label`
  background-image: url(${images.button});
  width: 205px;
  height: 80px;
  background-position: 50% 50%;
  background-size: 108%;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
  cursor: pointer;
  position: absolute;
  bottom: 45px;
  right: -250px;
  font-size: 26px;

  &:hover {
    background-image: url(${images.buttonHover});
  }
`;

const ClanSelect = styled.div`
  position: absolute;
  bottom: 131px;
  right: -206px;
  width: 125px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ClanOptionBase = styled.div`
  width: 40px;
  height: 40px;
  padding: 2px;
  margin: 2px;
  background-repeat: no-repeat;
  cursor: pointer;
  flex: 1 1 20%;
`;

const ClanOption = styled(ClanOptionBase)`
  background-image: url(${(props) => images.clanIcons[props.clan]});
`;

const TypeSelect = styled.div`
  position: absolute;
  bottom: 230px;
  right: -234px;
  width: 185px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TypeOption = styled.div`
  background: url(${images.mapIcons})
    ${(props) => `${props.iconOffset[0]}px ${props.iconOffset[1]}px`};
  background-repeat: no-repeat;
  background-size: 160px;
  flex: 0 1 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const EditorWrapper = styled.div`
  position: absolute;
  bottom: 55px;
  width: 100%;
  min-height: 210px;
  left: 20px;

  img {
    vertical-align: middle;
  }
`;

const InputOption = styled.div`
  flex: 1 1 33%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  color: white;
  text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
  background: url(${images.button});
  background-position: 50% 50%;
  background-size: 108%;
  background-repeat: no-repeat;
  margin: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;

  ${(props) => {
    if (props.multiple) {
      return `
      & > div {
        display: flex;

        & > input {
          width: 30px !important;
          margin-right: 12px;
        }
      }`;
    }
  }}
`;

const InputWrapper = styled.div`
  position: relative;
  width: 600px;
  left: 55px;

  & > div:first-of-type {
    position: absolute;
    top: 140px;
    left: 20px;
    height: 200px;
    width: 125%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;

    & input[type="text"],
    select {
      font-size: 18px;
      width: 115px;
      height: 25px;
    }
  }
`;

const InsertAttackButton = () => <img src="/assets/attack.png" />;
const InsertHealthButton = () => <img src="/assets/health.png" />;
const InsertBurnoutButton = () => <img src="/assets/burnout.png" />;
const InsertCapacityButton = () => <img src="/assets/capacity.png" />;
const InsertConsumedButton = () => <img src="/assets/consumed.png" />;
const InsertEmberButton = () => <img src="/assets/ember.png" />;
const InsertGoldButton = () => <img src="/assets/gold.png" />;
const InsertRageButton = () => <img src="/assets/rage.png" />;
const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold" />
    <button className="ql-insertAttack">
      <InsertAttackButton />
    </button>
    <button className="ql-insertHealth">
      <InsertHealthButton />
    </button>
    <button className="ql-insertBurnout">
      <InsertBurnoutButton />
    </button>
    <button className="ql-insertCapacity">
      <InsertCapacityButton />
    </button>
    <button className="ql-insertConsumed">
      <InsertConsumedButton />
    </button>
    <button className="ql-insertEmber">
      <InsertEmberButton />
    </button>
    <button className="ql-insertGold">
      <InsertGoldButton />
    </button>
    <button className="ql-insertRage">
      <InsertRageButton />
    </button>
  </div>
);

export default ({
  onChange,
  name,
  cost,
  variant,
  type,
  clan,
  attack,
  life,
  rarity,
  capacity,
  description,
}) => {
  const onImageInput = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = function (e) {
      let dataURL = e.target.result;
      dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
      onChange("image", dataURL);
    };

    reader.readAsDataURL(file);
  };

  const onUploadClick = (e) => {
    e.target.value = null;
  };

  return (
    <InputWrapper>
      <div>
        <InputOption>
          Card Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </InputOption>
        <InputOption>
          Type/Tribe:{" "}
          <input
            type="text"
            value={type}
            maxLength={9}
            onChange={(e) => onChange("type", e.target.value)}
          />
        </InputOption>
        <InputOption multiple>
          Cost/Attack/Life:{" "}
          <div>
            <input
              type="text"
              value={cost}
              maxLength={3}
              onChange={(e) => onChange("cost", e.target.value)}
              disabled={variant === "blight"}
            />
            <input
              type="text"
              value={attack}
              maxLength={3}
              onChange={(e) => onChange("attack", e.target.value)}
              disabled={variant !== "unit" && variant !== "champion"}
            />
            <input
              type="text"
              value={life}
              maxLength={3}
              onChange={(e) => onChange("life", e.target.value)}
              disabled={variant !== "unit" && variant !== "champion"}
            />
          </div>
        </InputOption>
        <InputOption>
          rarity:{" "}
          <select
            value={rarity}
            onChange={(e) => onChange("rarity", e.target.value)}
            disabled={variant !== "unit" && variant !== "spell"}
          >
            <option value="common">common</option>
            <option value="uncommon">uncommon</option>
            <option value="rare">rare</option>
          </select>
        </InputOption>
        <InputOption>
          Capacity:{" "}
          <select
            value={capacity}
            onChange={(e) => onChange("capacity", e.target.value)}
            disabled={variant !== "unit" && variant !== "champion"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </InputOption>
      </div>
      <EditorWrapper>
        <CustomToolbar />
        <ReactQuill
          value={description}
          onChange={(val) => onChange("description", val)}
          formats={["bold", "image"]}
          modules={editorModules}
        />
      </EditorWrapper>
      <input
        type="file"
        multiple={false}
        onChange={onImageInput}
        onClick={onUploadClick}
        accept="image/*"
        style={{ display: "none" }}
        id="image-upload"
      />
      <TypeSelect>
        <TypeOption
          iconOffset={[-40, 0]}
          onClick={() => onChange("variant", "unit")}
        />
        <TypeOption
          iconOffset={[-80, 0]}
          onClick={() => onChange("variant", "spell")}
        />
        <TypeOption
          iconOffset={[0, -120]}
          onClick={() => onChange("variant", "champion")}
        />
        <TypeOption
          iconOffset={[-80, -120]}
          onClick={() => onChange("variant", "blight")}
        />
      </TypeSelect>
      <ClanSelect>
        {["hellhorned", "awoken", "stygian", "melting", "umbra", "blight"].map(
          (clan) => (
            <ClanOption
              key={clan}
              clan={clan}
              onClick={() => onChange("clan", clan)}
            ></ClanOption>
          )
        )}
      </ClanSelect>
      <ImageInput htmlFor="image-upload">Choose Image</ImageInput>
    </InputWrapper>
  );
};
