import React, { useState, FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/styles";
import { string } from "prop-types";


// styledの一つ目の括弧はコンポーネント、二つ目の括弧はスタイル
const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: props =>
    props.color === "red"
      ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: props =>
    props.color === "red"
      ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
      : "0 3px 5px 2px rgba(33, 203, 243, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: 8,
  fontSize: 16
});

// 中央配置するためだけのdiv
const CenterDiv = styled("div")({
  textAlign: "center"
});

// 大きくしたテキストフィールド
const MyTextField = styled(TextField)({
  height: 60,
  width: 400
});


export default function Regist() {
  const [eventName, setEventName] = useState<string>("");
  const [content, setContent] = useState<string | null>("");
  const [eventDayAndTime, seteventDayAndTime] = useState<string>("");
  const [place, setPlace] = useState<string | null>("");
  const [postDayAndTime, setpostDayAndTime] = useState<string>("");
  const [channel, setchannel] = useState<string>("");
  const [channels, setchannels] = useState<string[]>(["general", "ramdom"]);

  const channelList = channels.map((ch, i) => {
    return (
      <MenuItem key={i} value={ch}>
        {ch}
      </MenuItem>
    );
  });

  const onClickRoot = () => {
    console.log("一覧ページに移動します");
  };

  const onclickRegist = () => {
    console.log("登録ページに移動します");
  }


  return (
    <CenterDiv>
      <div>
        <MyButton color="red" onClick={onClickRoot}>
          一覧ページ
          </MyButton>
        <MyButton color="blue" onClick={onclickRegist}>
          登録ページ
        </MyButton>
      </div>

      <h1>リマインダー登録</h1>

      <div>
        <form noValidate autoComplete="off">
          <div>
            <MyTextField
              required
              id="eventName"
              label="イベント名(必須)"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
              margin="normal"
            />
          </div>

          <div>
            <MyTextField
              id="config"
              label="説明文"
              value={content}
              onChange={e => setContent(e.target.value)}
              multiline
              margin="normal"
            />
          </div>

          <div>
            <MyTextField
              id="day"
              label="イベントの日付"
              value={eventDayAndTime}
              onChange={e => seteventDayAndTime(e.target.value)}
              margin="normal"
            />
          </div>

          <div>
            <MyTextField
              id="place"
              label="イベントの場所"
              value={place}
              onChange={e => setPlace(e.target.value)}
              margin="normal"
            />
          </div>

          <div>
            <MyTextField
              id="postDay"
              label="投稿する日付"
              value={postDayAndTime}
              onChange={e => setpostDayAndTime(e.target.value)}
              margin="normal"
            />
          </div>

          <div>
            <MyTextField
              id="channel"
              select
              label="チャンネル"
              value={channel}
              onChange={e => setchannel(e.target.value)}
              margin="normal"
            >
              {channelList}
            </MyTextField>
          </div>

        </form>
      </div>
    </CenterDiv>
  )
}