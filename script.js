// 1. 지도 생성 (초기 중심 좌표: ERICA 캠퍼스 중앙)
var map = L.map('map', {
    zoomControl: false // 줌 버튼 위치 커스텀을 위해 일단 끔
}).setView([37.2985, 126.8347], 17);

// 줌 컨트롤 오른쪽 상단으로 이동 (사이드바에 가리지 않게)
L.control.zoom({ position: 'topright' }).addTo(map);

// 2. 오픈스트릿맵 불러오기 (건물 이름이 보이는 기본 버전)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// --------------------------------------------------------
// 데이터 정의 (건물 정보)
const buildings = {

    "eng": {
        name: "학연산클러스터지원센터",
        floors: {
            "B1": "images/eng_0f.png",
            "1": "images/eng_1f.png",
            "2": "images/eng_2f.png",
            "3": "images/eng_3f.png",
            "4": "images/eng_4f.png",
            "5": "images/eng_5f.png",
            "6": "images/eng_6f.png"
        }
    },

    "eng1":{
        name: "제 1공학관",
        floors: {
            "1": "images/eng1_1f.png",
            "2": "images/eng1_2f.png",
            "3": "images/eng1_3f.png",
            "4": "images/eng1_4f.png",
            "5": "images/eng1_5f.png"
        }
    },

    "eng2": {
        name: "제2공학관",
        floors: {
            "1": "images/eng2_1f.png",
            "2": "images/eng2_2f.png",
            "3": "images/eng2_3f.png",
            "4": "images/eng2_4f.png",
            "5": "images/eng2_5f.png"
        }
    },

    "eng3": {
        name: "제3공학관",
        floors: {
            "B1": "images/eng3_0f.png",
            "1": "images/eng3_1f.png",
            "2": "images/eng3_2f.png",
            "3": "images/eng3_3f.png",
            "4": "images/eng3_4f.png",
            "5": "images/eng3_5f.png"
        }
    },

    "eng4": {
        name: "제4공학관",
        floors: {
            "B1": "images/eng4_0f.png",
            "1": "images/eng4_1f.png",
            "2": "images/eng4_2f.png",
            "3": "images/eng4_3f.png",
            "4": "images/eng4_4f.png",
            "5": "images/eng4_5f.png"
        }
    },

    "eng5": {
        name: "제5공학관",
        floors: {
            "B1": "images/eng5_0f.png",
            "1": "images/eng5_1f.png",
            "2": "images/eng5_2f.png",
            "3": "images/eng5_3f.png",
            "4": "images/eng5_4f.png",
            "5": "images/eng5_5f.png"
        }
    },


    
};

var mapLayers = {}; 
var searchMarker = null;
var myLocationMarker = null;

var engPolygon = L.polygon([
    ["37.296625","126.838591"],
    ["37.296048","126.838958"],
    ["37.296123","126.839151"],
    ["37.296704","126.838784"]
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng"] = engPolygon;

// 마우스 호버 효과
engPolygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
engPolygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
engPolygon.on('click', function() { openModal("eng"); });

var eng1Polygon = L.polygon([
    ["37.297723","126.836643"],
    ["37.297979","126.837236"],
    ["37.297888","126.837298"],
    ["37.297930","126.837418"],
    ["37.297331","126.837837"],
    ["37.296902","126.836879"],
    ["37.297209","126.836670"],
    ["37.297320","126.836847"],
    ["37.297282","126.836871"],
    ["37.297452","126.837265"],
    ["37.297713","126.837097"],
    ["37.297548","126.836759"]
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng1"] = eng1Polygon;

// 마우스 호버 효과
eng1Polygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
eng1Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng1Polygon.on('click', function() { openModal("eng1"); });


var eng2Polygon = L.polygon([
    ["37.297235","126.832491"],
    ["37.297395","126.832896"],
    ["37.297318","126.832947"],
    ["37.297329","126.832979"],
    ["37.296825","126.833317"],
    ["37.296776","126.833213"],
    ["37.296718","126.833248"],
    ["37.296584","126.832918"],
    ["37.296802","126.832778"],
    ["37.296906","126.833025"],
    ["37.297179","126.832848"],
    ["37.297056","126.832601"]  
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng2"] = eng2Polygon;

// 마우스 호버 효과
eng2Polygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
eng2Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng2Polygon.on('click', function() { openModal("eng2"); });

var eng3Polygon = L.polygon([
    ["37.297403","126.835847"],
    ["37.297231","126.835965"],
    ["37.297499","126.836608"],
    ["37.297670","126.836498"]
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng3"] = eng3Polygon;

// 마우스 호버 효과
eng3Polygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
eng3Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng3Polygon.on('click', function() { openModal("eng3"); });

var eng4Polygon = L.polygon([
    ["37.297169","126.835922"],
    ["37.296543","126.836348"],
    ["37.296573","126.836421"],
    ["37.296511","126.836480"],
    ["37.296526","126.836528"],
    ["37.296599","126.836485"],
    ["37.296635","126.836568"],
    ["37.297051","126.836276"],
    ["37.297041","126.836187"],
    ["37.297213","126.836050"]
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng4"] = eng4Polygon;

// 마우스 호버 효과
eng4Polygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
eng4Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng4Polygon.on('click', function() { openModal("eng4"); });

var eng5Polygon = L.polygon([
    ["37.296859","126.836839"],
    ["37.297226","126.837692"],
    ["37.296900","126.837907"],
    ["37.296492","126.836965"],
    ["37.296533","126.836933"],
    ["37.296543","126.836863"],
    ["37.296590","126.836828"],
    ["37.296693","126.836839"],
    ["37.296731","126.836783"],
    ["37.296797","126.836783"],
    ["37.296844","126.836847"]
], {
    color: 'transparent', 
    fillColor: '#0E4D9C', // 한양대 블루
    fillOpacity: 0
}).addTo(map);

mapLayers["eng5"] = eng5Polygon;

// 마우스 호버 효과
eng5Polygon.on('mouseover', function() { 
    this.setStyle({ color: '#0E4D9C', fillOpacity: 0.3 }); 
});
eng5Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng5Polygon.on('click', function() { openModal("eng5"); });



// --------------------------------------------------------
// 검색 기능
function searchBuilding() {
    var input = document.getElementById('search-input').value.trim();
    if (input === "") { alert("검색어를 입력하세요."); return; }

    var foundId = null;
    for (var key in buildings) {
        if (buildings[key].name.includes(input)) {
            foundId = key;
            break;
        }
    }

    if (foundId) {
        var layer = mapLayers[foundId];
        var center = layer.getBounds().getCenter(); 

        map.flyTo(center, 18); // 지도 이동

        // 기존 검색 마커 삭제
        if (searchMarker) map.removeLayer(searchMarker);
        
        // 검색된 위치에 마커 표시
        searchMarker = L.marker(center).addTo(map);
        searchMarker.bindPopup("<b>" + buildings[foundId].name + "</b>").openPopup();
        
    } else {
        alert("검색된 건물이 없습니다.");
    }
}

function handleEnter(e) {
    if (e.key === 'Enter') searchBuilding();
}

// --------------------------------------------------------
// 내 위치 찾기 (Geolocation)
function findMyLocation() {
    if (!navigator.geolocation) {
        alert("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
        return;
    }
    
    // 위치 요청
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var latlng = [lat, lng];

        // 지도 이동
        map.flyTo(latlng, 18);

        if (myLocationMarker) map.removeLayer(myLocationMarker);

        // 파란색 점으로 내 위치 표시
        myLocationMarker = L.circleMarker(latlng, {
            color: 'white', 
            fillColor: '#0E4D9C', 
            fillOpacity: 1, 
            radius: 8, 
            weight: 2
        }).addTo(map);
        
        // 반경 원 표시 (선택사항)
        L.circle(latlng, { radius: 20, color: '#0E4D9C', fillOpacity: 0.1, weight: 0 }).addTo(map);

    }, function() {
        alert("위치 정보를 가져올 수 없습니다.");
    });
}

// --------------------------------------------------------
// 모달 관련 함수
function openModal(id) {
    var data = buildings[id];
    var modal = document.getElementById('modal');
    var nav = document.getElementById('floor-nav');
    
    document.getElementById('modal-title').innerText = data.name;
    nav.innerHTML = "";

     // 층 정렬
    var floors = Object.keys(data.floors).sort(function(a, b) {
        // B1을 -1로 처리하여 가장 앞으로
        var aNum = a === "B1" ? -1 : parseInt(a);
        var bNum = b === "B1" ? -1 : parseInt(b);
        return aNum - bNum;
    });
    
    // 층 버튼 생성
    floors.forEach(function(floor) {
        var btn = document.createElement('button');
        btn.innerText = floor.startsWith("B") ? floor : floor + "F";
        btn.className = "floor-btn";
        btn.onclick = function() { changeFloor(id, floor, btn); };
        nav.appendChild(btn);
        
        // 1층을 기본으로 선택
        if(floor === "1") changeFloor(id, floor, btn);
    });

    modal.classList.remove('hidden');
}

function changeFloor(buildingId, floor, btnElement) {
    document.getElementById('floor-image').src = buildings[buildingId].floors[floor];
    
    // 버튼 활성화 스타일 처리
    var buttons = document.querySelectorAll('.floor-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// 모달 배경 클릭 시 닫기 기능 추가
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

map.on('click', function(e) {
    console.log("[" + e.latlng.lat.toFixed(6) + ", " + e.latlng.lng.toFixed(6) + "],");
});
/* 좌표추출도구
map.on('click', function(e) {
    var lat = e.latlng.lat.toFixed(6); // 위도 (소수점 6자리)
    var lng = e.latlng.lng.toFixed(6); // 경도 (소수점 6자리)
    
    // 1. 브라우저 콘솔(F12)에 [위도, 경도] 형식으로 출력
    console.log("[" + lat + ", " + lng + "],");
});*/