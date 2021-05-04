import React, { useContext } from "react";
import "./GroupNotification.scss";
import { DataContext } from "../../pages/GroupDetail";

const GroupNotification = () => {
  const { isMaster } = useContext(DataContext);
  console.log(isMaster);

  return (
    <div className="group-notification-container">
      <div className="problems-list">
        <div
          style={{ width: "100%", textAlign: "left", paddingBottom: "1rem" }}
        >
          그룹 공지사항
          {isMaster && <span>수정</span>}
        </div>
      </div>
      <div className="group-notification-content">
        4월 12일 코드포스 div2 있습니다!<br></br>
        가능하신 분은 참가 부탁드릴게요!
      </div>

      {/* <SolvedMemberList /> */}
    </div>
  );
};

export default GroupNotification;
