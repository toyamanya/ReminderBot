import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/styles";


interface Props {
}
interface State {
  eventName: string;
  content: string;
  eventDay: string; // 型が怪しい
  eventTime: string; // 型が怪しい
  eventPlace: string;
  postDay: string;
  postTime: string;
  channel: string; // 型が怪しい
  channels: string[];
  remindTime: string; // 型が怪しい
}

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


export default class Regist extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      eventName: "",
      content: "",
      eventDay: "",
      eventTime: "",
      eventPlace: "",
      postDay: "",
      postTime: "",
      channel: "",
      channels: ["general", "random"],
      remindTime: "",
    };
  }

  onClickRoot = () => {
    console.log("一覧ページに移動します");
  };

  onclickRegist = () => {
    console.log("登録ページに移動します");
  };

  render() {
    const channelList = this.state.channels.map((ch, i) => {
      return (
        <MenuItem key={i} value={ch}>
          {ch}
        </MenuItem>
      );
    });

    return (
      <CenterDiv>
        <div>
          <MyButton color="red" onClick={this.onClickRoot}>
            一覧ページ
          </MyButton>
          <MyButton color="blue" onClick={this.onclickRegist}>
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
                value={this.state.eventName}
                onChange={e => this.setState({ eventName: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="config"
                label="説明文"
                value={this.state.content}
                onChange={e => this.setState({ content: e.target.value })}
                multiline
                margin="normal"
              />
            </div>

            <div>
              <MyTextField
                id="day"
                label="イベントの日付"
                value={this.state.eventDay}
                onChange={e => this.setState({ eventDay: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="time"
                label="イベントの時間"
                value={this.state.eventTime}
                onChange={e => this.setState({ eventTime: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="place"
                label="イベントの場所"
                value={this.state.eventPlace}
                onChange={e => this.setState({ eventPlace: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="postDay"
                label="投稿する日付"
                value={this.state.postDay}
                onChange={e => this.setState({ postDay: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="postTime"
                label="投稿する時間"
                value={this.state.postTime}
                onChange={e => this.setState({ postTime: e.target.value })}
                margin="normal"
              />
            </div>
            <div>
              <MyTextField
                id="channel"
                select
                label="チャンネル"
                value={this.state.channel}
                onChange={e => this.setState({ channel: e.target.value })}
                margin="normal"
              >
                {channelList}
              </MyTextField>
            </div>
          </form>
        </div>
      </CenterDiv>
    );
  }
}
