from rest_framework import routers
from api.viewsets import SkillViewSet, PostViewSet, QuestionViewSet, ChoiceViewSet

router = routers.DefaultRouter()

router.register(r'skills', SkillViewSet)
router.register(r'posts', PostViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'choices', ChoiceViewSet)
