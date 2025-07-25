const quests = [
  { title: "기차에 탑니다.", desc: "" },
  { title: "기차에서 내려 부산에 도착합니다.", desc: "" },
  { title: "1일차 술을 먹습니다.", desc: "당신은 몇퍼센트 정도 취했나요?" },
  { title: "1일차 술을 끝냅니다.", desc: "당신은 클럽에 가나요?" },
  { title: "드디어 숙소에 도착하여 잠에 듭니다.", desc: "마치 롤러코스터를 타고 있는 듯한 술기운기군요." },
  { title: "숙취가 있던 말든 당신은 워터밤에 갑니다~", desc: "괴로움은 현재 몇퍼센트 인가요?" },
  { title: "2일차 술을 마십니다.", desc: "당신은 살아 있나요? 잘 살아 남아 보세요." },
  { title: "후 드디어 길었던 여행의 끝이랍니다.", desc: "잠만 자고 일어나면 된다공ㅅ!!" },
  { title: "이제 짐을 싸 볼까요?", desc: "서울 가는 기차를 타러 가요~" },
  { title: "드디어 내려요♪", desc: "집가는 택시를 타봐요!" }
];

let currentQuest = parseInt(localStorage.getItem("currentQuest")) || 0;

window.onload = function () {
  document.getElementById("main-app").style.display = "block";
  renderQuest();
};

function renderQuest() {
  const quest = quests[currentQuest];
  document.getElementById("quest-title").innerText = quest.title;
  document.getElementById("quest-description").innerText = quest.desc;
  document.getElementById("choice-screen").style.display = "none";

  const savedFeeling =
    localStorage.getItem("feeling_" + currentQuest) ||
    localStorage.getItem("lastFeeling") ||
    "stepgood";

  document.getElementById("current-image").src =
    "/static/img/" + savedFeeling + ".png";

  updateProgress();
}

function completeQuest() {
  document.getElementById("choice-screen").style.display = "block";
}

function selectFeeling(feeling) {
  localStorage.setItem("feeling_" + currentQuest, feeling);
  localStorage.setItem("lastFeeling", feeling);
  document.getElementById("current-image").src = "/static/img/" + feeling + ".png";
  document.getElementById("choice-screen").style.display = "none";
  nextQuest();
}

function prevQuest() {
  if (currentQuest > 0) {
    currentQuest--;
    localStorage.setItem("currentQuest", currentQuest);
    renderQuest();
  }
}

function nextQuest() {
  if (currentQuest < quests.length - 1) {
    currentQuest++;
    localStorage.setItem("currentQuest", currentQuest);
    renderQuest();
  }
}

function updateProgress() {
  const percent = ((currentQuest + 1) / quests.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

