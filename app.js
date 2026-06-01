/* ==========================================================================
   양구, 발걸음 가볍개 - 양구군 반려동물 관광 안내 웹페이지 Controller
   ========================================================================== */

// 1. 데이터베이스 (Yanggu Pet-Friendly Places In-Memory DB)
const YANGGU_PLACES = [
  {
    id: 1,
    name: "한반도섬",
    category: "관광지",
    address: "강원특별자치도 양구군 양구읍 고대리 안대리 일원",
    lat: 38.1187,
    lng: 127.9782,
    tel: "033-480-2512",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["산책로", "포토존", "전망대", "주차가능"],
    tip: "짚라인 탑승장 아래 잔디밭이 넓어 반려견과 산책하기 최고입니다. 호숫가 데크에서는 강풍이 불 수 있으니 하네스를 꼼꼼히 확인해 주세요.",
    description: "파로호 상류에 조성된 국내 최대 규모의 인공 습지 섬으로, 한반도 모양을 본떠 만들었습니다. 아름다운 수변 산책로와 다채로운 한반도 랜드마크 조형물이 가득하며, 강아지와 나무 데크길을 걷기 좋습니다.",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "양구수목원",
    category: "관광지",
    address: "강원특별자치도 양구군 동면 숨골로 810번길 130",
    lat: 38.1363,
    lng: 128.0461,
    tel: "033-480-7391",
    allowSmall: true,
    allowMedium: true,
    allowLarge: false,
    offLeash: false,
    tags: ["피톤치드", "산림욕", "야생화", "입장료있음"],
    tip: "안전 예방을 위해 목줄 길이를 1.5m 이내로 유지해야 하며, 실내 온실 및 DMZ 야생동물생태관 내부에는 동반 입장이 불가능합니다. 야외 산책로 전 구역은 이용 가능합니다.",
    description: "대암산 기슭의 청정 자연 속에 위치한 수목원입니다. DMZ 야생화분재원, 생태 숲, 튤립 정원 등 아름다운 테마정원들이 가득하여 피톤치드를 호흡하며 산림욕을 동반하기에 제격인 에코 관광지입니다.",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "파로호 꽃섬",
    category: "관광지",
    address: "강원특별자치도 양구군 양구읍 하리 570-1",
    lat: 38.1042,
    lng: 127.9739,
    tel: "033-480-2512",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["꽃밭", "봄가을추천", "평지산책", "포토존"],
    tip: "그늘이 다소 부족할 수 있으니 한여름 낮 시간대는 피하고, 댕댕이를 위한 음용수를 넉넉히 챙겨 가시는 것을 권장합니다.",
    description: "계절마다 유채꽃, 양귀비, 메밀꽃, 코스모스 등 다채로운 꽃들이 만발하는 호수 위 정원입니다. 경사가 전혀 없는 평탄한 흙길 산책 코스라 노령견이나 어린 강아지도 무리 없이 산책할 수 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "광치계곡 둘레길",
    category: "관광지",
    address: "강원특별자치도 양구군 국토정중앙면 광치령로 1794",
    lat: 38.0963,
    lng: 128.0845,
    tel: "033-480-2529",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: true,
    tags: ["계곡", "여름물놀이", "오프리쉬구역", "그늘산책"],
    tip: "일부 얕은 물살 구역(안내 표지판 근처)에 한해 오프리쉬 물놀이가 일시적으로 허용됩니다. 단, 다른 등산객이 보이면 즉시 목줄을 통제하셔야 합니다.",
    description: "사계절 맑은 물이 굽이쳐 흐르는 울창한 숲속 계곡입니다. 둘레길이 잘 닦여 있어 나뭇그늘 속 시원한 계곡 소리를 들으며 반려견과 트레킹 및 얕은 계곡물에서 발 담그며 힐링할 수 있는 장소입니다.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "양구 인문학캠핑장",
    category: "숙소",
    address: "강원특별자치도 양구군 양구읍 파로호로 869-9",
    lat: 38.1166,
    lng: 127.9892,
    tel: "033-480-2675",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: true,
    tags: ["캠핑", "반려견전용구역", "오프리쉬운동장", "샤워장"],
    tip: "A구역(반려견 동반 전용 사이트) 내에는 펜스가 쳐진 잔디밭 펫 플레이그라운드가 있어 목줄 없이 뛰놀 수 있습니다. 예약 시 미리 반려견 동반 사항을 명시해야 합니다.",
    description: "양구군에서 직접 운영하는 자연 친화적 캠핑장으로, 반려견 동반 캠퍼들을 위한 전용 구역과 안전 펜스를 완비했습니다. 맑은 공기와 넓은 데크, 깨끗한 위생 시설로 애견 동반 캠핑족에게 인기가 높습니다.",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "양구 숲속의 하루 펜션",
    category: "숙소",
    address: "강원특별자치도 양구군 동면 숨골로 780번길 42",
    lat: 38.1158,
    lng: 128.0250,
    tel: "010-5364-1234",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: true,
    tags: ["독채펜션", "애견운동장", "수영장", "바비큐"],
    tip: "10kg 이상 대형견의 경우 추가 요금이 발생할 수 있으니 사전 문의가 필요합니다. 잔디 운동장은 이중 펜스로 안전하게 마감되어 안심할 수 있습니다.",
    description: "대암산 자락 숲속에 조용히 자리 잡은 반려견 전용/동반 독채 펜션입니다. 넓고 폭신한 인조잔디 운동장과 여름철 이용 가능한 댕댕이 전용 수영장이 마련되어 있어 견주와 반려견 모두 자유로운 시간을 보낼 수 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "국토정중앙천문대 캠핑장",
    category: "숙소",
    address: "강원특별자치도 양구군 국토정중앙면 국토정중앙로 781-14",
    lat: 38.0416,
    lng: 128.0232,
    tel: "033-480-2586",
    allowSmall: true,
    allowMedium: true,
    allowLarge: false,
    offLeash: false,
    tags: ["별자리관측", "캠핑장", "잔디광장", "주차가능"],
    tip: "천문대 과학관 내부 전시실에는 동반이 불가하지만 야외 천체캠핑장과 잔디밭 산책은 목줄 착용 하에 동반 가능합니다. 밤에는 빛 공해가 적어 댕댕이와 멋진 별하늘 샷을 찍을 수 있습니다.",
    description: "대한민국의 지리적 정중앙점에 세워진 천문대 부설 캠핑장입니다. 밤하늘 쏟아지는 별을 관측하며 반려견과 감성적인 숲속 밤을 보낼 수 있는 이색 숙박 공간입니다.",
    imageUrl: "https://images.unsplash.com/photo-1526495124232-a02e18494d17?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "양구 댕댕빌리지 글램핑",
    category: "숙소",
    address: "강원특별자치도 양구군 양구읍 파로호로 1024-15",
    lat: 38.1340,
    lng: 127.9650,
    tel: "010-8877-9988",
    allowSmall: true,
    allowMedium: true,
    allowLarge: false,
    offLeash: true,
    tags: ["글램핑", "개별펜스", "애견침대", "감성캠핑"],
    tip: "각 텐트마다 개별 울타리가 쳐져 있어 프라이빗하게 오프리쉬로 고기를 구워 먹을 수 있습니다. 어메니티로 애견용 수건, 배변패드, 전용 샴푸가 기본 제공됩니다.",
    description: "캠핑의 감성과 펜션의 편안함을 결합한 댕댕이 동반 전용 글램핑장입니다. 럭셔리한 텐트 실내에 강아지 전용 침대와 밥그릇이 구비되어 있어 빈손으로 가볍게 들러 힐링할 수 있는 프리미엄 숙소입니다.",
    imageUrl: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "카페 배꼽",
    category: "식당/카페",
    address: "강원특별자치도 양구군 양구읍 양록길 23",
    lat: 38.1063,
    lng: 127.9890,
    tel: "033-481-9980",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: true,
    tags: ["디저트카페", "인조잔디", "실내외동반", "포토존"],
    tip: "시그니처 메뉴인 '양구시래기 라떼'가 독특하고 맛있습니다. 야외 인조잔디 펜스 놀이터에서는 사장님이 기르시는 상주견 '양구'가 반겨줍니다.",
    description: "양구 국토정중앙 '배꼽' 테마를 재치 있게 녹인 이색 애견동반 카페입니다. 강아지 전용 음료인 '멍스프레소'도 판매하며, 야외 운동장에서는 오프리쉬로 뛰어놀 수 있어 반려인들에게 양구 내 필수 코스로 손꼽힙니다.",
    imageUrl: "https://images.unsplash.com/photo-1554818538-98e045d45ac8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "카페 소공원",
    category: "식당/카페",
    address: "강원특별자치도 양구군 양구읍 관공서로 42",
    lat: 38.1030,
    lng: 127.9850,
    tel: "033-482-1540",
    allowSmall: true,
    allowMedium: true,
    allowLarge: false,
    offLeash: false,
    tags: ["정원카페", "베이커리", "실내동반", "감성인테리어"],
    tip: "실내에서는 리드줄을 짧게 잡거나 케이지(혹은 개모차)를 이용해 주셔야 합니다. 정원 야외 테라스석은 목줄 착용 시 비교적 자유롭게 머무실 수 있습니다.",
    description: "작지만 아늑하고 감성적인 정원이 딸린 한옥풍 베이커리 카페입니다. 수제 스콘과 에이드가 훌륭하며 조용하고 차분한 분위기 속에 반려견과 힐링 브런치를 즐기기에 좋습니다.",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "양구 재래식손두부",
    category: "식당/카페",
    address: "강원특별자치도 양구군 양구읍 학안로 6",
    lat: 38.1012,
    lng: 127.9935,
    tel: "033-482-4475",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["손두부", "야외테이블", "로컬맛집", "한식"],
    tip: "반려견 동반 시 식당 건물 외부의 지붕이 있는 야외 평상 및 테이블 구역에서만 식사가 가능합니다. 전통 가마솥으로 끓여내는 두부전골이 일품입니다.",
    description: "양구산 콩만을 사용해 매일 아침 가마솥에 손수 두부를 만드는 로컬 맛집입니다. 담백하고 고소한 두부와 칼칼한 두부전골을 맛볼 수 있으며, 넓은 마당 야외석에서 반려견과 동반 식사할 수 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "청춘원 시래기 식당",
    category: "식당/카페",
    address: "강원특별자치도 양구군 양구읍 파로호로 877",
    lat: 38.1147,
    lng: 127.9888,
    tel: "033-481-2299",
    allowSmall: true,
    allowMedium: false,
    allowLarge: false,
    offLeash: false,
    tags: ["시래기요리", "소형견전용", "룸완비", "사전예약추천"],
    tip: "동반 가능한 실내 전용 프라이빗 룸(2개)이 있어 사전 전화 예약을 꼭 하고 가시는 편이 좋습니다. 이동가방이나 켄넬은 필수 지참하셔야 합니다.",
    description: "양구 특산물인 명품 '펀치볼 시래기'를 주재료로 하는 웰빙 시래기 밥상 전문점입니다. 시래기 생선조림과 갈비찜이 유명하며 깔끔하고 편안한 개별 룸에서 반려견과 조용하게 한식을 즐길 수 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 13,
    name: "양구종합동물병원",
    category: "의료/편의",
    address: "강원특별자치도 양구군 양구읍 사명길 78",
    lat: 38.1045,
    lng: 127.9880,
    tel: "033-481-7582",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["동물병원", "24시간연계", "수술전문", "친절함"],
    tip: "평일은 19:00까지 정상 진료하며, 야간 응급 상황 발생 시에는 춘천 종합병원 응급의학센터로 즉시 연계해 드리는 비상 전원 시스템을 운영합니다.",
    description: "양구 관내에서 가장 신뢰받는 종합 동물병원입니다. 내과, 외과 전문 진료는 물론 여행 중 발생할 수 있는 긴급 골절, 벌레 물림 등의 응급처치가 가능하며 원장님의 세심한 설명이 돋보입니다.",
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    name: "현대동물병원",
    category: "의료/편의",
    address: "강원특별자치도 양구군 양구읍 비봉로 9",
    lat: 38.1061,
    lng: 127.9871,
    tel: "033-481-3312",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["동물병원", "기초진료", "예방접종", "친절한설명"],
    tip: "토요일은 13:00까지 진료합니다. 영양제 및 관절 약, 구충제 처방이 신속하게 가능하여 여행 중 비상약 수급에 용이합니다.",
    description: "양구 시내 중심가에 위치하여 접근성이 매우 좋은 1차 진료 중심의 동물병원입니다. 진드기 예방약 처방 및 간단한 외상 소독 처리가 주 진료 분야로 여행객들이 가볍게 들르기에 적합합니다.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    name: "댕댕그루밍 애견미용",
    category: "의료/편의",
    address: "강원특별자치도 양구군 양구읍 관공서길 14",
    lat: 38.1055,
    lng: 127.9899,
    tel: "010-4422-5566",
    allowSmall: true,
    allowMedium: true,
    allowLarge: false,
    offLeash: false,
    tags: ["위생미용", "스파케어", "예약제", "당일예약가능"],
    tip: "야외 물놀이 후 모래나 흙이 묻은 댕댕이를 위한 스파 목욕 서비스가 인기입니다. 최소 2시간 전 전화 예약을 하셔야 진료 후 미용이 원활합니다.",
    description: "가위컷 전문 및 스파 살롱 애견 미용실입니다. 자극이 적은 친환경 천연 샴푸만을 사용하며, 댕댕이가 스트레스를 받지 않는 긍정 강화 미용을 지향하여 외지 견주들도 안심하고 맡길 수 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    name: "펫마트 양구점",
    category: "의료/편의",
    address: "강원특별자치도 양구군 양구읍 희망로 64",
    lat: 38.1038,
    lng: 127.9912,
    tel: "033-482-1215",
    allowSmall: true,
    allowMedium: true,
    allowLarge: true,
    offLeash: false,
    tags: ["애견용품", "수제간식", "하네스보완", "사료선택폭넓음"],
    tip: "여행지에서 유용하게 쓸 수 있는 애견용 물휴지, 배변 봉투, 모기 퇴치제 펫 스프레이 등을 합리적인 가격에 즉시 구매할 수 있어 요긴합니다.",
    description: "다양한 국내외 프리미엄 브랜드의 용품과 건식/습식 사료, 강아지 수제 간식, 안전 하네스, 이동 가방 등을 대규모 매장에 갖춘 양구 최대 펫용품 스토어입니다.",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
  }
];

// 2. 전역 애플리케이션 상태 (State)
const customPlacesStored = localStorage.getItem("yanggu_custom_places");
const initialPlaces = customPlacesStored ? JSON.parse(customPlacesStored) : YANGGU_PLACES;

const state = {
  places: initialPlaces,
  filteredPlaces: initialPlaces,
  selectedCategory: "전체",
  searchQuery: "",
  selectedConditions: [], // ['소형견', '중형견', '대형견', '오프리쉬']
  selectedPlaceId: null,
  
  // 지도 관련 상태
  mapEngine: "leaflet", // 'leaflet' 또는 'kakao'
  mapInstance: null,
  mapMarkers: [],
  kakaoKey: "",
  
  // 모바일 뷰 상태
  activeView: "list", // 'list' 또는 'map'
  
  // 위치 선택 관련 임시 상태
  isPickingLocation: false,
  tempCoords: null,
  pickerMarker: null
};

// 3. 지도 아이콘 생성 유틸리티 (Leaflet 전용)
function getCategoryEmoji(category) {
  switch (category) {
    case "숙소": return "🏕️";
    case "식당/카페": return "☕";
    case "관광지": return "🌳";
    case "의료/편의": return "🏥";
    default: return "🐾";
  }
}

function getCategoryClass(category) {
  switch (category) {
    case "숙소": return "lodge";
    case "식당/카페": return "food";
    case "관광지": return "attract";
    case "의료/편의": return "medical";
    default: return "default";
  }
}

// 4. 지도 초기화 (Initialize Map)
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;
  
  // 기존 맵 파괴 (다시 로드할 때를 대비)
  if (state.mapInstance) {
    state.mapInstance.remove();
    state.mapInstance = null;
    state.mapMarkers = [];
  }
  
  // Leaflet 지도 엔진 로드
  if (state.mapEngine === "leaflet") {
    document.getElementById("map-engine-status").innerText = "OpenStreetMap (Leaflet)";
    document.getElementById("map-engine-status").className = "status-value badge-active";
    
    // 양구군 중심부로 지도의 중심 설정
    state.mapInstance = L.map("map", {
      zoomControl: false // 줌 버튼 위치 조정을 위해 비활성화 후 우측 상단 추가
    }).setView([38.105, 127.990], 12);
    
    // OpenStreetMap 타일 레이어 등록
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(state.mapInstance);
    
    // 줌 컨트롤 우측 상단 배치
    L.control.zoom({ position: "topright" }).addTo(state.mapInstance);
    
    // 마커들 추가
    updateMapMarkers();
  }
}

// 5. 지도 마커 업데이트 (Leaflet)
function updateMapMarkers() {
  if (state.mapEngine !== "leaflet" || !state.mapInstance) return;
  
  // 이전 마커 제거
  state.mapMarkers.forEach(marker => state.mapInstance.removeLayer(marker));
  state.mapMarkers = [];
  
  // 필터링된 장소들만 마커로 표시
  state.filteredPlaces.forEach(place => {
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lng);
    
    // 카테고리별 마커 클래스 지정
    const categoryClass = getCategoryClass(place.category);
    
    // Custom DivIcon 제작
    const markerHtml = `
      <div class="custom-pin pin-${categoryClass} ${state.selectedPlaceId === place.id ? 'active' : ''}" id="marker-pin-${place.id}">
        <div class="pin-shadow"></div>
        <div class="pin-body">
          <span class="pin-icon">${getCategoryEmoji(place.category)}</span>
        </div>
      </div>
    `;
    
    const customIcon = L.divIcon({
      html: markerHtml,
      className: "custom-div-icon",
      iconSize: [36, 42],
      iconAnchor: [18, 42],
      popupAnchor: [0, -42]
    });
    
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(state.mapInstance);
    
    // Leaflet Popup 바인딩
    const popupContent = `
      <div class="popup-container">
        <img class="popup-image" src="${place.imageUrl}" alt="${place.name}" onerror="this.src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400'">
        <div class="popup-body">
          <span class="popup-category">${place.category}</span>
          <h4 class="popup-title">${place.name}</h4>
          <p class="popup-desc">${place.address}</p>
          <div class="popup-footer">🐾 자세히 보기</div>
        </div>
      </div>
    `;
    
    marker.bindPopup(popupContent, {
      className: "custom-popup",
      closeButton: true,
      maxWidth: 220
    });
    
    // 마커 클릭 이벤트
    marker.on("click", () => {
      selectPlace(place.id, false); // 세부 정보 띄우되 지도 이동은 중복 방지
    });
    
    // 팝업 내부의 '자세히 보기' 클릭 시 상세 판넬 띄우기
    marker.on("popupopen", () => {
      const popupElement = marker.getPopup().getElement();
      const clickTarget = popupElement.querySelector(".popup-container");
      if (clickTarget) {
        clickTarget.addEventListener("click", (e) => {
          e.stopPropagation();
          showDetailPanel(place);
        });
      }
    });
    
    state.mapMarkers.push(marker);
  });
  
  // 마커 수에 맞춰 맵 뷰 조정 (마커가 존재하면)
  if (state.mapMarkers.length > 0) {
    const group = new L.featureGroup(state.mapMarkers);
    state.mapInstance.fitBounds(group.getBounds().pad(0.1));
  }
}

// 6. 데이터 필터링 핵심 로직 (Filtering logic)
function filterPlaces() {
  state.filteredPlaces = state.places.filter(place => {
    // 6.1 카테고리 필터링
    if (state.selectedCategory !== "전체" && place.category !== state.selectedCategory) {
      return false;
    }
    
    // 6.2 텍스트 검색 (이름, 주소, 태그, 설명 포함)
    if (state.searchQuery.trim() !== "") {
      const query = state.searchQuery.toLowerCase();
      const inName = place.name.toLowerCase().includes(query);
      const inAddress = place.address.toLowerCase().includes(query);
      const inTags = place.tags.some(tag => tag.toLowerCase().includes(query));
      const inDesc = place.description.toLowerCase().includes(query);
      const inTip = place.tip.toLowerCase().includes(query);
      
      if (!inName && !inAddress && !inTags && !inDesc && !inTip) {
        return false;
      }
    }
    
    // 6.3 반려견 조건 필터링
    if (state.selectedConditions.length > 0) {
      for (const condition of state.selectedConditions) {
        if (condition === "소형견" && !place.allowSmall) return false;
        if (condition === "중형견" && !place.allowMedium) return false;
        if (condition === "대형견" && !place.allowLarge) return false;
        if (condition === "오프리쉬" && !place.offLeash) return false;
      }
    }
    
    return true;
  });
  
  // UI 리스트와 카운터 업데이트
  renderPlacesList();
  
  // 지도 마커 동기화
  if (state.mapEngine === "leaflet") {
    updateMapMarkers();
  } else if (state.mapEngine === "kakao" && window.kakao && window.kakao.maps) {
    updateKakaoMapMarkers();
  }
}

// 7. 사이드바 리스트 UI 렌더링
function renderPlacesList() {
  const listContainer = document.getElementById("places-list");
  const countElement = document.getElementById("place-count");
  if (!listContainer || !countElement) return;
  
  countElement.innerText = state.filteredPlaces.length;
  listContainer.innerHTML = "";
  
  if (state.filteredPlaces.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-list">
        <i data-lucide="frown" class="empty-icon"></i>
        <p class="empty-text">해당하는 반려견 동반 장소가 없습니다.</p>
        <p class="empty-subtext">검색어나 필터 조건을 변경해 보세요!</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  state.filteredPlaces.forEach(place => {
    const isSelected = state.selectedPlaceId === place.id;
    const card = document.createElement("div");
    card.className = `place-card ${isSelected ? 'selected' : ''}`;
    card.id = `place-card-${place.id}`;
    
    // 소형/중형/대형견 필터에 따른 태그 생성
    let dogSizeTags = [];
    if (place.allowSmall) dogSizeTags.push("소형견");
    if (place.allowMedium) dogSizeTags.push("중형견");
    if (place.allowLarge) dogSizeTags.push("대형견");
    
    const sizeTagsHtml = dogSizeTags.map(size => `<span class="card-tag">${size}</span>`).join("");
    const offleashTagHtml = place.offLeash ? `<span class="card-tag highlight">🐾 오프리쉬</span>` : "";
    
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${place.imageUrl}" alt="${place.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400'">
      </div>
      <div class="card-info">
        <div class="card-top">
          <div class="card-badge-row">
            <span class="category-badge ${place.category}">${place.category}</span>
          </div>
          <h3 class="card-title">${place.name}</h3>
          <p class="card-address">${place.address}</p>
        </div>
        <div class="card-bottom">
          ${sizeTagsHtml}
          ${offleashTagHtml}
        </div>
      </div>
    `;
    
    // 리스트 클릭 이벤트 바인딩
    card.addEventListener("click", () => {
      selectPlace(place.id, true);
    });
    
    listContainer.appendChild(card);
  });
  
  // Lucide 아이콘 새로 적용
  lucide.createIcons();
}

// 8. 특정 장소 선택 핸들러 (마커 클릭, 카드 클릭 통합)
function selectPlace(placeId, shouldPan = true) {
  state.selectedPlaceId = placeId;
  
  // 리스트 카드 선택 스타일 갱신
  document.querySelectorAll(".place-card").forEach(card => card.classList.remove("selected"));
  const selectedCard = document.getElementById(`place-card-${placeId}`);
  if (selectedCard) {
    selectedCard.classList.add("selected");
    // 스크롤 시키기
    selectedCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  
  // 핀 디자인 액티브 클래스 부여를 위해 핀 돔 컨트롤 (Leaflet / Kakao 공통)
  document.querySelectorAll(".custom-pin").forEach(pin => pin.classList.remove("active"));
  const pinDom = document.getElementById(`marker-pin-${placeId}`);
  if (pinDom) pinDom.classList.add("active");
  
  // 데이터 찾기
  const place = state.places.find(p => p.id === placeId);
  if (!place) return;
  
  // 지도 위치 이동 & 팝업 열기
  if (shouldPan) {
    if (state.mapEngine === "leaflet" && state.mapInstance) {
      // 해당 마커 찾기
      const markerIndex = state.filteredPlaces.findIndex(p => p.id === placeId);
      if (markerIndex !== -1 && state.mapMarkers[markerIndex]) {
        const marker = state.mapMarkers[markerIndex];
        state.mapInstance.flyTo([place.lat, place.lng], 14, { animate: true, duration: 1 });
        
        // 팝업 오픈
        marker.openPopup();
      }
    } else if (state.mapEngine === "kakao" && state.mapInstance) {
      const moveLatLon = new kakao.maps.LatLng(place.lat, place.lng);
      state.mapInstance.panTo(moveLatLon);
      
      // 카카오맵 마커 팝업(인포윈도우) 오픈
      const markerIndex = state.filteredPlaces.findIndex(p => p.id === placeId);
      if (markerIndex !== -1 && state.kakaoMarkers && state.kakaoMarkers[markerIndex]) {
        openKakaoInfoWindow(state.kakaoMarkers[markerIndex], place);
      }
    }
  } else {
    // 마커 자체를 직접 클릭해서 shouldPan이 false인 경우에도 카카오 인포윈도우는 열어줘야 함
    if (state.mapEngine === "kakao" && state.mapInstance) {
      const markerIndex = state.filteredPlaces.findIndex(p => p.id === placeId);
      if (markerIndex !== -1 && state.kakaoMarkers && state.kakaoMarkers[markerIndex]) {
        openKakaoInfoWindow(state.kakaoMarkers[markerIndex], place);
      }
    }
  }
  
  // 상세 패널 열기
  showDetailPanel(place);
  
  // 모바일 환경일 때 목록보기에서 지도(상세뷰) 화면으로 전환
  if (window.innerWidth <= 768 && state.activeView === "list") {
    toggleMobileView("map");
  }
}

// 9. 슬라이드인 세부 판넬 렌더링 및 노출
function showDetailPanel(place) {
  const panel = document.getElementById("detail-panel");
  const content = document.getElementById("detail-content");
  const backdrop = document.getElementById("panel-backdrop");
  
  if (!panel || !content) return;
  
  // 소/중/대형견 태그 구성
  const smallText = place.allowSmall 
    ? '<span class="policy-badge"><i data-lucide="check"></i> 소형견 가능</span>' 
    : '<span class="policy-badge restricted"><i data-lucide="ban"></i> 소형견 제한</span>';
  const mediumText = place.allowMedium 
    ? '<span class="policy-badge"><i data-lucide="check"></i> 중형견 가능</span>' 
    : '<span class="policy-badge restricted"><i data-lucide="ban"></i> 중형견 제한</span>';
  const largeText = place.allowLarge 
    ? '<span class="policy-badge"><i data-lucide="check"></i> 대형견 가능</span>' 
    : '<span class="policy-badge restricted"><i data-lucide="ban"></i> 대형견 제한</span>';
  const offleashText = place.offLeash 
    ? '<span class="policy-badge offleash"><i data-lucide="smile"></i> 오프리쉬 구역</span>' 
    : '';

  // Get category-specific etiquette checklist (Recommendation 4)
  const etiquetteHtml = getCategoryEtiquette(place.category);

  // Get reviews from localStorage or MOCK (Recommendation 4)
  const reviews = getPlaceReviews(place.id);
  const reviewsHtml = reviews.map(rev => `
    <div class="review-item">
      <div class="review-meta">
        <span class="review-author">🐾 ${escapeHtml(rev.author)}</span>
        <span class="review-date">${rev.date}</span>
      </div>
      <p class="review-text">${escapeHtml(rev.text)}</p>
    </div>
  `).join("");

  content.innerHTML = `
    <div class="detail-hero">
      <img src="${place.imageUrl}" alt="${place.name}" onerror="this.src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800'">
    </div>
    <div class="detail-body">
      <div class="detail-header-info">
        <div class="detail-category-row">
          <span class="category-badge ${place.category}">${place.category}</span>
          <span class="detail-address"><i data-lucide="map-pin"></i> 양구군 관내</span>
        </div>
        <h2 class="detail-title">${place.name}</h2>
      </div>

      <div class="detail-pet-policy">
        <div class="policy-header">
          <i data-lucide="dog"></i>
          <span>반려견 동반 조건 가이드</span>
        </div>
        <div class="policy-list">
          ${smallText}
          ${mediumText}
          ${largeText}
          ${offleashText}
        </div>
      </div>

      <div class="detail-divider"></div>

      <!-- Category Specific Etiquette -->
      ${etiquetteHtml}

      <div class="detail-divider"></div>

      <div class="detail-section">
        <h4 class="detail-section-title">장소 설명</h4>
        <p class="detail-desc">${place.description}</p>
      </div>

      <div class="detail-tip-box">
        <i data-lucide="sparkles" class="tip-icon"></i>
        <div class="tip-content">
          <span class="tip-title">양구, 발걸음 가볍개 댕댕 팁!</span>
          <p class="tip-text">${place.tip}</p>
        </div>
      </div>

      <div class="detail-divider"></div>

      <div class="detail-section">
        <h4 class="detail-section-title">상세 정보</h4>
        <div class="info-grid">
          <div class="info-item">
            <i data-lucide="map"></i>
            <span>지번 주소</span>
            <span>${place.address}</span>
          </div>
          <div class="info-item">
            <i data-lucide="navigation"></i>
            <span>길찾기</span>
            <span>
              <a href="https://map.kakao.com/link/to/${place.name},${place.lat},${place.lng}" target="_blank" style="color: var(--primary-color); text-decoration: none; font-weight: 700;">카카오맵 ↗</a>
              <span style="color: var(--text-muted); margin: 0 6px;">|</span>
              <a href="https://map.naver.com/v5/search/${encodeURIComponent(place.address)}" target="_blank" style="color: var(--accent-color); text-decoration: none; font-weight: 700;">네이버 지도 ↗</a>
            </span>
          </div>
          <div class="info-item">
            <i data-lucide="phone"></i>
            <span>전화번호</span>
            <span>${place.tel ? place.tel : "정보 없음"}</span>
          </div>
          <div class="info-item">
            <i data-lucide="hash"></i>
            <span>해시태그</span>
            <span style="color: var(--primary-color)">${place.tags.map(t => '#' + t).join(" ")}</span>
          </div>
        </div>
      </div>

      <div class="detail-divider"></div>

      <!-- Visitor Review System -->
      <div class="detail-section detail-reviews-section">
        <h4 class="reviews-title">📢 다녀온 댕댕이 후기 (${reviews.length})</h4>
        <div class="reviews-list">
          ${reviewsHtml || '<p class="empty-text" style="font-size:11.5px; color:var(--text-muted);">첫 후기를 작성해 보세요!</p>'}
        </div>
        
        <div class="review-form">
          <textarea id="review-text-input-${place.id}" placeholder="댕댕이와 함께한 솔직한 방문 경험을 공유해 주세요..."></textarea>
          <div class="review-form-bottom">
            <input type="text" id="review-author-input-${place.id}" placeholder="작성자 닉네임" autocomplete="off">
            <button type="button" class="review-submit-btn" onclick="submitReview(${place.id})">등록</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  panel.classList.add("open");
  if (backdrop) backdrop.classList.add("active");
  
  // Lucide 아이콘 새로 적용
  lucide.createIcons();
}

// 10. 세부 판넬 닫기
function closeDetailPanel() {
  const panel = document.getElementById("detail-panel");
  const backdrop = document.getElementById("panel-backdrop");
  
  if (panel) panel.classList.remove("open");
  if (backdrop) backdrop.classList.remove("active");
  
  // 카드 선택 스타일 제거
  state.selectedPlaceId = null;
  document.querySelectorAll(".place-card").forEach(card => card.classList.remove("selected"));
  
  // 지도 액티브 마커 제거
  document.querySelectorAll(".custom-pin").forEach(pin => pin.classList.remove("active"));
}

// 11. 모바일 해상도 목록/지도 토글 제어
function toggleMobileView(targetView) {
  const container = document.querySelector(".app-container");
  const toggleBtn = document.getElementById("btn-mobile-toggle");
  
  if (!container || !toggleBtn) return;
  
  if (targetView) {
    state.activeView = targetView;
  } else {
    state.activeView = state.activeView === "list" ? "map" : "list";
  }
  
  if (state.activeView === "map") {
    container.classList.add("map-view");
    toggleBtn.innerHTML = `<i data-lucide="list"></i> <span>목록 보기</span>`;
    // 지도 리포지셔닝 강제 작동 (Leaflet 버그 방지)
    setTimeout(() => {
      if (state.mapInstance && state.mapEngine === "leaflet") {
        state.mapInstance.invalidateSize();
      }
    }, 300);
  } else {
    container.classList.remove("map-view");
    toggleBtn.innerHTML = `<i data-lucide="map"></i> <span>지도 보기</span>`;
    closeDetailPanel(); // 목록 돌아갈 시 상세 판넬도 닫음
  }
  
  lucide.createIcons();
}

// 12. 햄버거 메뉴 및 모달 창 제어
function initMenuOverlay() {
  const openBtn = document.getElementById("btn-menu-open");
  const closeBtn = document.getElementById("btn-menu-close");
  const overlay = document.getElementById("menu-overlay");
  
  if (!openBtn || !closeBtn || !overlay) return;
  
  openBtn.addEventListener("click", () => overlay.classList.add("active"));
  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  
  // 바깥 레이어 클릭 시 닫기
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
  
  // 가이드 탭 기능 활성화
  const tabBtns = document.querySelectorAll(".guide-tabs .tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      document.querySelectorAll(".menu-body .tab-pane").forEach(pane => {
        pane.classList.remove("active");
      });
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });
}

// 13. 카카오맵 동적 로딩 및 통합 연동
function initKakaoMap(apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    alert("올바른 Kakao Maps JavaScript 키를 입력해 주세요.");
    return;
  }
  
  // 이전 Leaflet 지도 리소스를 파괴하고 컨테이너 클리어
  if (state.mapInstance) {
    if (state.mapEngine === "leaflet") {
      state.mapInstance.remove();
    } else {
      // 카카오맵인 경우 컨테이너 클리어
      document.getElementById("map").innerHTML = "";
    }
    state.mapInstance = null;
    state.mapMarkers = [];
  }
  
  state.kakaoKey = apiKey;
  state.mapEngine = "kakao";
  
  // 카카오맵 스크립트 엘리먼트 로딩
  const scriptId = "kakao-map-sdk-script";
  let script = document.getElementById(scriptId);
  
  if (script) {
    // 이미 스크립트 로드됨 -> 바로 지도 기동
    setupKakaoMapInstance();
  } else {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer&autoload=false`;
    
    script.onload = () => {
      kakao.maps.load(() => {
        setupKakaoMapInstance();
      });
    };
    
    script.onerror = () => {
      alert("카카오맵 SDK 로딩 실패. 키를 확인하시거나 브라우저의 도메인 허용 처리를 점검해 주세요. Leaflet 엔진으로 자동 복귀합니다.");
      state.mapEngine = "leaflet";
      initMap();
    };
    
    document.head.appendChild(script);
  }
}

// 카카오맵 셋업 인스턴스 빌드
function setupKakaoMapInstance() {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(38.105, 127.990),
    level: 7
  };
  
  state.mapInstance = new kakao.maps.Map(container, options);
  
  // 카카오맵 전용 마커 및 인포윈도우 리스트 생성
  state.kakaoMarkers = [];
  state.activeInfoWindow = null;
  
  updateKakaoMapMarkers();
  
  document.getElementById("map-engine-status").innerText = "Kakao Maps";
  document.getElementById("map-engine-status").className = "status-value badge-kakao";
  
  // 모달 닫기
  document.getElementById("menu-overlay").classList.remove("active");
  
  // 모바일인 경우 레이아웃 갱신
  if (state.activeView === "map") {
    setTimeout(() => state.mapInstance.relayout(), 100);
  }
}

// 카카오맵 마커 생성/갱신
function updateKakaoMapMarkers() {
  if (state.mapEngine !== "kakao" || !state.mapInstance) return;
  
  // 이전 마커 클리어
  if (state.kakaoMarkers) {
    state.kakaoMarkers.forEach(m => m.setMap(null));
  }
  state.kakaoMarkers = [];
  
  if (state.activeInfoWindow) {
    state.activeInfoWindow.close();
  }
  
  const bounds = new kakao.maps.LatLngBounds();
  
  state.filteredPlaces.forEach(place => {
    const latlng = new kakao.maps.LatLng(place.lat, place.lng);
    
    // 카테고리별 마커 클래스 지정
    const categoryClass = getCategoryClass(place.category);
    
    // Custom DOM Element for Kakao CustomOverlay (matching Leaflet styling)
    const contentEl = document.createElement("div");
    contentEl.className = `custom-pin pin-${categoryClass} ${state.selectedPlaceId === place.id ? 'active' : ''}`;
    contentEl.id = `marker-pin-${place.id}`;
    contentEl.style.cursor = "pointer";
    contentEl.innerHTML = `
      <div class="pin-shadow"></div>
      <div class="pin-body">
        <span class="pin-icon">${getCategoryEmoji(place.category)}</span>
      </div>
    `;
    
    // CustomOverlay 생성
    const overlay = new kakao.maps.CustomOverlay({
      position: latlng,
      content: contentEl,
      clickable: true,
      xAnchor: 0.5,
      yAnchor: 1.0 // Bottom center
    });
    
    overlay.setMap(state.mapInstance);
    
    // 클릭 이벤트 바인딩
    contentEl.addEventListener("click", (e) => {
      e.stopPropagation();
      selectPlace(place.id, false); // 정보 패널 띄우고 카카오맵 뷰는 그대로
    });
    
    state.kakaoMarkers.push(overlay);
    bounds.extend(latlng);
  });
  
  // 마커 영역에 맞춰 맵 축적 및 중심 이동
  if (state.filteredPlaces.length > 0) {
    state.mapInstance.setBounds(bounds);
  }
}

// 카카오 맵 커스텀 인포윈도우(팝업) 오픈
function openKakaoInfoWindow(marker, place) {
  if (state.activeInfoWindow) {
    state.activeInfoWindow.close();
  }
  
  const contentHtml = `
    <div style="padding: 10px; width: 220px; font-family: 'Noto Sans KR', sans-serif;">
      <h5 style="margin: 0 0 5px 0; font-size: 14px; font-weight: 700; color: var(--primary-color);">${place.name}</h5>
      <p style="margin: 0 0 8px 0; font-size: 11px; color: #666; line-height: 1.3;">${place.address}</p>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size: 9px; padding: 2px 6px; border-radius: 99px; background: #e8f0ec; color: #2e5a44; font-weight:700;">${place.category}</span>
        <span id="kakao-pop-more" style="font-size: 10px; color: var(--accent-color); font-weight: 700; cursor: pointer;">자세히 보기 &rarr;</span>
      </div>
    </div>
  `;
  
  const latlng = new kakao.maps.LatLng(place.lat, place.lng);
  const infowindow = new kakao.maps.InfoWindow({
    content: contentHtml,
    removable: true,
    position: latlng
  });
  
  infowindow.open(state.mapInstance);
  state.activeInfoWindow = infowindow;
  
  // 인포윈도우 오픈 직후 '자세히 보기' 이벤트 동적 연결
  setTimeout(() => {
    const moreBtn = document.getElementById("kakao-pop-more");
    if (moreBtn) {
      moreBtn.addEventListener("click", () => {
        showDetailPanel(place);
      });
    }
  }, 100);
}

// 13.5 Helper Utilities and Mock Databases (Recommendations 2, 3, 4)
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

function getCategoryEtiquette(category) {
  switch (category) {
    case "숙소":
      return `
        <div class="detail-etiquette-box">
          <div class="etiquette-header">
            <span>🏕️</span>
            <strong>숙소 동반 펫티켓 가이드</strong>
          </div>
          <ul class="etiquette-list">
            <li>배변 실수 방지를 위해 실내에서는 가급적 매너벨트를 착용해 주세요.</li>
            <li>댕댕이 전용 침구가 아니면 침대나 소파 위로 올라가지 않도록 배려해 주세요.</li>
            <li>독채 운동장 외 공용 구역에서는 리드줄을 필수 착용해야 합니다.</li>
            <li>밤늦은 짖음 소리로 다른 여행객의 휴식을 방해하지 않도록 보살펴 주세요.</li>
          </ul>
        </div>
      `;
    case "식당/카페":
      return `
        <div class="detail-etiquette-box">
          <div class="etiquette-header">
            <span>☕</span>
            <strong>식당/카페 동반 펫티켓 가이드</strong>
          </div>
          <ul class="etiquette-list">
            <li>실내에서는 이동 가방, 켄넬 또는 개모차(유모차)를 이용해 주세요.</li>
            <li>식사 중인 다른 손님들의 동선을 방해하지 않게 테이블 아래 대기시킵니다.</li>
            <li>식당의 일반 식기를 반려견에게 사용하지 마시고 전용 물그릇을 챙겨 주세요.</li>
            <li>대소변 실수 예방을 위해 입장 전 야외에서 미리 배변을 유도해 주세요.</li>
          </ul>
        </div>
      `;
    case "관광지":
      return `
        <div class="detail-etiquette-box">
          <div class="etiquette-header">
            <span>🌳</span>
            <strong>야외 관광지 동반 펫티켓 가이드</strong>
          </div>
          <ul class="etiquette-list">
            <li>2m 이내의 고정 목줄을 팽팽하게 유지하며 걸어 주세요.</li>
            <li>배변 봉투를 항시 지참하고, 배설물 발생 시 흔적 없이 수거해 주세요.</li>
            <li>야생화나 조경 구역 안으로 반려견이 들어가 훼손하지 않게 주의하세요.</li>
            <li>행인이 갑자기 다가올 때는 돌발 반응을 막기 위해 줄을 짧게 통제합니다.</li>
          </ul>
        </div>
      `;
    case "의료/편의":
      return `
        <div class="detail-etiquette-box">
          <div class="etiquette-header">
            <span>🏥</span>
            <strong>병원/상점 동반 펫티켓 가이드</strong>
          </div>
          <ul class="etiquette-list">
            <li>동물병원 대기실에서는 질환 감염을 막기 위해 안거나 케이지에 넣어 대기하세요.</li>
            <li>전염성 기침이나 피부 질환이 의심될 땐 접수처에 격리 대기를 미리 요청하세요.</li>
            <li>쇼핑 공간 내 용품에 마킹을 하지 않도록 매너벨트를 차거나 짧게 잡아 주세요.</li>
          </ul>
        </div>
      `;
    default:
      return "";
  }
}

const MOCK_REVIEWS = {
  1: [
    { author: "코코맘", date: "2026-05-18", text: "데크길 산책하기 너무 평화롭고 좋아요! 한반도 모양 따라 걷는데 바람이 시원합니다." },
    { author: "초코아빠", date: "2026-05-10", text: "주차장도 넓고 강아지 산책시키는 분들이 꽤 많아서 안심하고 걸었어요." }
  ],
  2: [
    { author: "보리엄마", date: "2026-05-15", text: "숲길 냄새 맡으며 피톤치드 충전하고 힐링했네요. 온실 실내는 입장이 안 되니 야외 위주로 산책해 보세요!" }
  ],
  3: [
    { author: "뭉치누나", date: "2026-05-20", text: "경사가 없고 완전히 평탄한 흙길 정원 코스라 다리 불편한 노령견 뭉치도 편안하게 놀다 갑니다. 꽃도 환상적이에요!" }
  ],
  4: [
    { author: "여름이", date: "2026-05-02", text: "시원한 계곡물에 발 담그고 피톤치드 숲속 걸으니 천국입니다. 여름철에 더위 피하기 딱 좋은 코스예요." }
  ],
  5: [
    { author: "캠핑러버", date: "2026-04-28", text: "반려견 동반 전용 사이트 구역 내 펜스가 잘 되어 있어 눈치 안 보고 편안하게 캠핑하고 가요. 적극 추천!" }
  ],
  6: [
    { author: "댕댕하우스", date: "2026-05-11", text: "천연잔디 운동장이 진짜 넓고 안전 펜스가 확실해서 20kg 중대형견인데도 맘껏 뛰게 해줬어요. 재방문 의사 100%!" }
  ],
  7: [
    { author: "별빛견주", date: "2026-05-05", text: "야외 천체캠핑장 잔디 밭에서 밤하늘 별 보며 산책하는 경험이 감동적입니다. 밤공기가 맑네요." }
  ],
  8: [
    { author: "멍멍이", date: "2026-05-19", text: "글램핑 각 개별동마다 울타리가 쳐져 있어서 바비큐 타임에 안심할 수 있었습니다. 웰컴 어메니티로 패드랑 샴푸도 주시네요." }
  ],
  9: [
    { author: "배꼽단골", date: "2026-05-21", text: "시그니처 시래기 라떼 특이하고 맛있고, 반려견 전용 멍스프레소 비주얼이 대박 귀여워요! 인조잔디 운동장도 짱!" }
  ],
  10: [
    { author: "한옥러버", date: "2026-05-13", text: "조용하고 감성적인 한옥풍 야외 정원에서 커피 마시기 좋습니다. 스콘 퀄리티가 뛰어나네요." }
  ],
  11: [
    { author: "두부짱", date: "2026-05-09", text: "양구 오시면 펀치볼 시래기랑 같이 가마솥 손두부는 드셔야 해요! 마당 야외 평상이 있어 댕댕이 데리고 편하게 점심 해결했습니다." }
  ],
  12: [
    { author: "시래기견", date: "2026-05-17", text: "미리 예약해서 반려견 동반 전용 룸으로 잡아 식사했습니다. 시래기 갈비찜 진짜 부드럽고 댕댕이도 얌전히 잘 대기해 줬어요." }
  ],
  13: [
    { author: "두치네", date: "2026-05-01", text: "여행 중 눈 충혈이 생겨서 급하게 내원했는데 선생님들이 친절하고 신속하게 봐주셔서 금방 진정되었습니다. 안심하고 여행해요." }
  ],
  14: [
    { author: "진드기방멸", date: "2026-05-10", text: "산책 중 풀밭에 다녀온 뒤 진드기가 보여서 떼어내고 약 받으러 왔어요. 설명 꼼꼼히 해주셔서 유용했습니다." }
  ],
  15: [
    { author: "뽀송맘", date: "2026-05-12", text: "계곡에서 신나게 젖은 강아지 데려와서 머드스파 목욕 맡겼는데 하송송 털 뽀송하게 다 살아나서 기적 같습니다!" }
  ],
  16: [
    { author: "펫쇼핑", date: "2026-05-14", text: "이동 중에 강아지 사료가 부족해서 급하게 들렀는데 넓고 용품 브랜드가 엄청 많네요! 사고 싶었던 간식도 잔뜩 담았습니다." }
  ]
};

function getPlaceReviews(placeId) {
  const stored = localStorage.getItem(`yanggu_reviews_${placeId}`);
  if (stored) {
    return JSON.parse(stored);
  }
  return MOCK_REVIEWS[placeId] || [];
}

function addPlaceReview(placeId, author, text) {
  const reviews = getPlaceReviews(placeId);
  const date = new Date().toISOString().split('T')[0];
  reviews.unshift({ author: author || "익명 견주", date: date, text: text });
  localStorage.setItem(`yanggu_reviews_${placeId}`, JSON.stringify(reviews));
  return reviews;
}

window.submitReview = function(placeId) {
  const textInput = document.getElementById(`review-text-input-${placeId}`);
  const authorInput = document.getElementById(`review-author-input-${placeId}`);
  if (!textInput || !authorInput) return;
  
  const text = textInput.value.trim();
  const author = authorInput.value.trim();
  
  if (text === "" || author === "") {
    alert("작성자 닉네임과 후기 내용을 모두 입력해 주세요.");
    return;
  }
  
  addPlaceReview(placeId, author, text);
  
  const place = state.places.find(p => p.id === placeId);
  if (place) {
    showDetailPanel(place);
  }
};

function renderWeatherWidget() {
  const widget = document.getElementById("weather-widget");
  if (!widget) return;
  
  const now = new Date();
  const hour = now.getHours();
  let baseTemp = 19.5; // 평균 기온 시뮬레이션
  
  if (hour >= 6 && hour < 12) baseTemp += (hour - 6) * 1.0;
  else if (hour >= 12 && hour < 16) baseTemp = 25.0 - (hour - 12) * 0.4;
  else if (hour >= 16 && hour < 22) baseTemp = 23.0 - (hour - 16) * 0.8;
  else baseTemp = 15.0;
  
  const temp = baseTemp.toFixed(1);
  const daySeed = now.getDate() + now.getMonth();
  const dustVal = Math.floor(15 + (daySeed % 12) + (now.getMinutes() % 6));
  
  let asphaltRisk = "낮음";
  let riskColor = "var(--success-color)";
  if (baseTemp > 24) {
    asphaltRisk = "주의 ⚠️ (화상 우려)";
    riskColor = "var(--accent-color)";
  } else if (baseTemp > 18) {
    asphaltRisk = "보통 🐾 (쾌적 산책)";
    riskColor = "var(--primary-color)";
  }
  
  widget.innerHTML = `
    <div class="weather-left">
      <div class="weather-title-row">
        <span>📍</span>
        <strong>실시간 양구 산책 날씨</strong>
      </div>
      <div class="weather-temp-row">
        <span class="weather-temp">${temp}°C</span>
        <span class="weather-status">맑음 🌤️</span>
      </div>
    </div>
    <div class="weather-right">
      <span class="dust-badge good">미세먼지: ${dustVal} ㎍/㎥ (좋음)</span>
      <span class="asphalt-risk">아스팔트 온도: <strong style="color: ${riskColor}">${asphaltRisk}</strong></span>
    </div>
  `;
}

function initEmergencyModal() {
  const openBtn = document.getElementById("btn-emergency-open");
  const closeBtn = document.getElementById("btn-emergency-close");
  const modal = document.getElementById("emergency-modal");
  
  if (!openBtn || !closeBtn || !modal) return;
  
  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// 13.6 새 장소 등록 모달 및 지도 클릭 연동 기능
function showToast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  const iconName = type === "success" ? "check-circle" : "alert-circle";
  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${msg}</span>
  `;
  
  container.appendChild(toast);
  lucide.createIcons();
  
  // 강제 리플로우 후 쇼 애니메이션 작동
  setTimeout(() => toast.classList.add("show"), 10);
  
  // 3초 후 페이드아웃 및 제거
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initRegisterModal() {
  const openBtn = document.getElementById("btn-add-place");
  const closeBtn = document.getElementById("btn-register-close");
  const modal = document.getElementById("register-modal");
  const form = document.getElementById("register-form");
  const triggerPickerBtn = document.getElementById("btn-trigger-picker");
  
  if (!openBtn || !closeBtn || !modal) return;
  
  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    resetRegisterForm();
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      resetRegisterForm();
    }
  });
  
  triggerPickerBtn.addEventListener("click", () => {
    enterMapPickerMode();
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleRegisterSubmit();
  });
}

function resetRegisterForm() {
  const form = document.getElementById("register-form");
  if (form) form.reset();
  state.tempCoords = null;
  const status = document.getElementById("coords-status");
  if (status) {
    status.innerText = "미선택 (필수)";
    status.className = "coords-display";
  }
}

function enterMapPickerMode() {
  const modal = document.getElementById("register-modal");
  if (modal) modal.classList.remove("active");
  
  const overlay = document.getElementById("map-picker-overlay");
  if (overlay) overlay.classList.remove("hidden");
  
  state.isPickingLocation = true;
  closeDetailPanel();
  
  if (window.innerWidth <= 768) {
    toggleMobileView("map");
  }
  
  // 기존 맵 마커들 임시 제거
  if (state.mapEngine === "leaflet" && state.mapInstance) {
    state.mapMarkers.forEach(m => state.mapInstance.removeLayer(m));
    
    // Leaflet 클릭 이벤트 등록
    state.mapInstance.on("click", onLeafletMapClick);
  } else if (state.mapEngine === "kakao" && state.mapInstance) {
    if (state.kakaoMarkers) {
      state.kakaoMarkers.forEach(m => m.setMap(null));
    }
    if (state.activeInfoWindow) {
      state.activeInfoWindow.close();
    }
    
    // 카카오맵 클릭 이벤트 등록
    state.kakaoEventBound = (mouseEvent) => onKakaoMapClick(mouseEvent);
    kakao.maps.event.addListener(state.mapInstance, "click", state.kakaoEventBound);
  }
  
  showToast("지도를 클릭하여 장소의 위치를 선택해 주세요.", "success");
}

function onLeafletMapClick(e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;
  state.tempCoords = { lat, lng };
  
  if (state.pickerMarker) {
    state.pickerMarker.setLatLng([lat, lng]);
  } else {
    // 빨간 핀 마커 생성
    const redPinIcon = L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41]
    });
    
    state.pickerMarker = L.marker([lat, lng], { icon: redPinIcon }).addTo(state.mapInstance);
  }
}

function onKakaoMapClick(mouseEvent) {
  const latlng = mouseEvent.latLng;
  const lat = latlng.getLat();
  const lng = latlng.getLng();
  state.tempCoords = { lat, lng };
  
  if (state.pickerMarker) {
    state.pickerMarker.setPosition(latlng);
  } else {
    state.pickerMarker = new kakao.maps.Marker({
      position: latlng,
      map: state.mapInstance
    });
  }
}

function confirmMapPick() {
  if (!state.tempCoords) {
    showToast("지도 위를 클릭해 위치를 지정해 주세요.", "error");
    return;
  }
  
  // 상태 텍스트 업데이트
  const status = document.getElementById("coords-status");
  if (status) {
    status.innerText = `선택 완료 (위도: ${state.tempCoords.lat.toFixed(4)}, 경도: ${state.tempCoords.lng.toFixed(4)})`;
    status.className = "coords-display selected";
  }
  
  exitMapPickerMode(true);
}

function cancelMapPick() {
  state.tempCoords = null;
  exitMapPickerMode(false);
}

function exitMapPickerMode(isConfirmed) {
  const overlay = document.getElementById("map-picker-overlay");
  if (overlay) overlay.classList.add("hidden");
  
  state.isPickingLocation = false;
  
  // 리스너 및 피커 핀 해제
  if (state.mapEngine === "leaflet" && state.mapInstance) {
    state.mapInstance.off("click", onLeafletMapClick);
    if (state.pickerMarker) {
      state.mapInstance.removeLayer(state.pickerMarker);
    }
  } else if (state.mapEngine === "kakao" && state.mapInstance) {
    if (state.kakaoEventBound) {
      kakao.maps.event.removeListener(state.mapInstance, "click", state.kakaoEventBound);
      state.kakaoEventBound = null;
    }
    if (state.pickerMarker) {
      state.pickerMarker.setMap(null);
    }
  }
  state.pickerMarker = null;
  
  // 기존 장소 필터 갱신 및 마커 재배치
  filterPlaces();
  
  // 모달 복구
  const modal = document.getElementById("register-modal");
  if (modal) modal.classList.add("active");
  
  if (isConfirmed) {
    showToast("위치가 설정되었습니다.", "success");
  } else {
    showToast("위치 선택이 취소되었습니다.", "error");
  }
}

function handleRegisterSubmit() {
  if (!state.tempCoords) {
    showToast("지도를 통해 위치 좌표를 필수로 선택해 주세요.", "error");
    return;
  }
  
  const name = document.getElementById("reg-name").value.trim();
  const category = document.getElementById("reg-category").value;
  const address = document.getElementById("reg-address").value.trim();
  const tel = document.getElementById("reg-tel").value.trim();
  const tagsInput = document.getElementById("reg-tags").value;
  const allowSmall = document.getElementById("reg-small").checked;
  const allowMedium = document.getElementById("reg-medium").checked;
  const allowLarge = document.getElementById("reg-large").checked;
  const offLeash = document.getElementById("reg-offleash").checked;
  const description = document.getElementById("reg-desc").value.trim();
  const tip = document.getElementById("reg-tip").value.trim();
  
  if (!name || !address || !description) {
    showToast("필수 입력 사항(*)을 기입해 주세요.", "error");
    return;
  }
  
  // 태그 파싱
  const tags = tagsInput ? tagsInput.split(",").map(t => t.trim()).filter(Boolean) : [];
  
  // 카테고리별 매칭 대표 이미지
  let imageUrl = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"; // 기본 댕댕이
  if (category === "숙소") {
    imageUrl = "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800";
  } else if (category === "식당/카페") {
    imageUrl = "https://images.unsplash.com/photo-1554818538-98e045d45ac8?auto=format&fit=crop&q=80&w=800";
  } else if (category === "관광지") {
    imageUrl = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800";
  } else if (category === "의료/편의") {
    imageUrl = "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800";
  }
  
  // 고유 ID 발행
  const newId = state.places.length > 0 ? Math.max(...state.places.map(p => p.id)) + 1 : 1;
  
  const newPlace = {
    id: newId,
    name: name,
    category: category,
    address: address,
    lat: state.tempCoords.lat,
    lng: state.tempCoords.lng,
    tel: tel || null,
    allowSmall: allowSmall,
    allowMedium: allowMedium,
    allowLarge: allowLarge,
    offLeash: offLeash,
    tags: tags,
    description: description,
    tip: tip || "목줄을 꼭 착용하고 쾌적한 펫티켓 수칙을 동참해 주세요.",
    imageUrl: imageUrl
  };
  
  // 메모리 및 브라우저 데이터베이스 적재
  state.places.push(newPlace);
  localStorage.setItem("yanggu_custom_places", JSON.stringify(state.places));
  
  // 모달 닫기 및 폼 초기화
  const modal = document.getElementById("register-modal");
  if (modal) modal.classList.remove("active");
  resetRegisterForm();
  
  // 필터 재기동하여 UI 갱신
  filterPlaces();
  
  // 마커 수에 맞춰 맵 뷰 조정
  setTimeout(() => {
    if (state.mapEngine === "leaflet" && state.mapInstance && state.mapMarkers.length > 0) {
      const group = new L.featureGroup(state.mapMarkers);
      state.mapInstance.fitBounds(group.getBounds().pad(0.1));
    }
  }, 200);
  
  showToast(`새로운 장소 [${name}] 등록이 완료되었습니다!`, "success");
}

// 14. 이벤트 리스너 세팅 및 초기 기동
document.addEventListener("DOMContentLoaded", () => {
  // 실시간 날씨 및 긴급 모달 바인딩 (Recommendation 2, 3)
  renderWeatherWidget();
  initEmergencyModal();
  setInterval(renderWeatherWidget, 60000); // 1분 주기로 갱신
  
  // 14.1 로고 클릭 시 전체 필터 초기화
  document.getElementById("btn-logo").addEventListener("click", () => {
    resetAllFilters();
    closeDetailPanel();
    if (window.innerWidth <= 768) {
      toggleMobileView("list");
    }
  });
  
  // 14.2 통합 검색어 입력 이벤트 (디바운스/실시간 검색)
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.length > 0) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
    filterPlaces();
  });
  
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearBtn.classList.add("hidden");
    filterPlaces();
  });
  
  // 14.3 카테고리 퀵 필터 클릭
  const categoryBtns = document.querySelectorAll(".category-btn");
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      state.selectedCategory = btn.getAttribute("data-category");
      filterPlaces();
      closeDetailPanel();
    });
  });
  
  // 14.4 반려견 조건(칩) 토글 클릭
  const conditionChips = document.querySelectorAll(".condition-chip");
  conditionChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const condition = chip.getAttribute("data-condition");
      
      if (state.selectedConditions.includes(condition)) {
        state.selectedConditions = state.selectedConditions.filter(c => c !== condition);
        chip.classList.remove("active");
      } else {
        state.selectedConditions.push(condition);
        chip.classList.add("active");
      }
      filterPlaces();
      closeDetailPanel();
    });
  });
  
  // 14.5 필터 초기화 버튼
  document.getElementById("btn-reset-filters").addEventListener("click", () => {
    resetAllFilters();
  });
  
  // 14.6 상세 패널 닫기 이벤트
  document.getElementById("btn-detail-close").addEventListener("click", () => {
    closeDetailPanel();
  });
  
  document.getElementById("panel-backdrop").addEventListener("click", () => {
    closeDetailPanel();
  });
  
  // 14.7 모바일 전용 토글 뷰 버튼
  document.getElementById("btn-mobile-toggle").addEventListener("click", () => {
    toggleMobileView();
  });
  
  // 14.8 카카오 맵 키 등록 이벤트
  document.getElementById("btn-apply-kakao").addEventListener("click", () => {
    const keyVal = document.getElementById("kakao-api-key").value;
    initKakaoMap(keyVal);
  });
  
  // 필터 초기화 유틸
  function resetAllFilters() {
    searchInput.value = "";
    state.searchQuery = "";
    clearBtn.classList.add("hidden");
    
    categoryBtns.forEach(b => b.classList.remove("active"));
    document.querySelector(".category-btn[data-category='전체']").classList.add("active");
    state.selectedCategory = "전체";
    
    conditionChips.forEach(c => c.classList.remove("active"));
    state.selectedConditions = [];
    
    filterPlaces();
  }
  
  // 14.8.5 새 장소 등록 모달 및 피커 버튼 바인딩
  initRegisterModal();
  document.getElementById("btn-picker-save").addEventListener("click", confirmMapPick);
  document.getElementById("btn-picker-cancel").addEventListener("click", cancelMapPick);

  // 14.9 햄버거 메뉴 / 가이드 오버레이 초기화
  initMenuOverlay();
  

  
  // 14.11 앱 최초 지도 및 리스트 렌더링 실행
  initMap();
  filterPlaces();
  
  // Lucide 아이콘 파싱
  lucide.createIcons();
});

