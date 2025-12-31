// 1. 지도 생성
var map = L.map('map').setView([37.2985, 126.8347], 17);

// 2. 오픈스트릿맵 불러오기
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// --------------------------------------------------------
// 데이터 정의
const buildings = {
    "eng2": {
        name: "제2공학관",
        floors: {
            "1": "images/eng2_1f.png",
            "2": "images/eng2_2f.png",
            "3": "images/eng2_3f.png",
            "4": "images/eng2_4f.png",
            "5": "images/eng2_5f.png"
        }
    }
};

// 검색을 위해 지도 위의 건물들을 담아두는 통
var mapLayers = {}; 

// ★ [추가됨] 검색했을 때 찍힐 마커를 저장할 변수
var searchMarker = null;

// --------------------------------------------------------
// 제2공학관 투명 영역 그리기
var eng2Polygon = L.polygon([
    [37.296582, 126.832907], 
    [37.296832, 126.833307], 
    [37.297339, 126.832974], 
    [37.297245, 126.832486]  
], {
    color: 'transparent', // 평소엔 투명
    fillColor: '#3388ff', 
    fillOpacity: 0        // 평소엔 안 보임
}).addTo(map);

mapLayers["eng2"] = eng2Polygon;

// 마우스 호버 효과
eng2Polygon.on('mouseover', function() { 
    this.setStyle({ color: 'blue', fillOpacity: 0.5 }); 
});
eng2Polygon.on('mouseout', function() { 
    this.setStyle({ color: 'transparent', fillOpacity: 0 }); 
});

// 클릭 시 모달 열기
eng2Polygon.on('click', function() { openModal("eng2"); });


// --------------------------------------------------------
// ★ [수정됨] 검색 기능 (확대 + 마커 표시)
function searchBuilding() {
    var input = document.getElementById('search-input').value.trim();
    if (input === "") { alert("검색어를 입력하세요."); return; }

    var foundId = null;
    
    // 이름 찾기
    for (var key in buildings) {
        if (buildings[key].name.includes(input)) {
            foundId = key;
            break;
        }
    }

    if (foundId) {
        var layer = mapLayers[foundId];
        var center = layer.getBounds().getCenter(); // 건물의 정중앙 좌표

        // 1. 지도를 해당 건물로 이동 및 확대
        map.flyTo(center, 18);

        // ★ 2. 기존에 찍힌 검색 마커가 있다면 지우기 (청소)
        if (searchMarker) {
            map.removeLayer(searchMarker);
        }

        // ★ 3. 새로운 마커 찍기
        searchMarker = L.marker(center).addTo(map);
        
        // 마커에 "제2공학관" 이름표 붙이고 바로 띄우기
        searchMarker.bindPopup("<b>" + buildings[foundId].name + "</b>").openPopup();

        // (선택사항) 마커를 클릭해도 설계도가 뜨게 하고 싶다면 아래 주석 해제
        /*
        searchMarker.on('click', function() {
            openModal(foundId);
        });
        */
        
    } else {
        alert("검색된 건물이 없습니다.");
    }
}

function handleEnter(e) {
    if (e.key === 'Enter') searchBuilding();
}


// --------------------------------------------------------
// 모달 관련 함수 (기존과 동일)

function openModal(id) {
    var data = buildings[id];
    var modal = document.getElementById('modal');
    var nav = document.getElementById('floor-nav');
    
    document.getElementById('modal-title').innerText = data.name;
    nav.innerHTML = "";
    Object.keys(data.floors).forEach(function(floor) {
        var btn = document.createElement('button');
        btn.innerText = floor + "F";
        btn.className = "floor-btn";
        btn.onclick = function() { changeFloor(id, floor, btn); };
        nav.appendChild(btn);
        if(floor === "1") changeFloor(id, floor, btn);
    });

    modal.classList.remove('hidden');
}

function changeFloor(buildingId, floor, btnElement) {
    document.getElementById('floor-image').src = buildings[buildingId].floors[floor];
    var buttons = document.querySelectorAll('.floor-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}