from rest_framework import serializers
from .models import Skill, Post, Question, Choice


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(source='choice_set', many=True)

    class Meta:
        model = Question
        fields = '__all__'

    def create(self, validated_data):
        print(validated_data)
        choices_data = validated_data.pop('choice_set')
        question = Question.objects.create(**validated_data)

        for choice in choices_data:
            choice, created = Choice.objects.get_or_create(question=choice['question'])
            question.choices.add(choice)
            print(question)

        return question

    def update(self, instance, validated_data):
        choices_data = validated_data.pop('choice_set')
        instance.question = validated_data.get('question', instance.quesiton)
        instance.created_at = validated_data.get('created_at', instance.created_at)

        choices_list = []

        for choice in choices_data:
            choice, created = Choice.objects.get_or_create(question=choice['question'])
            choices_list.append(choice)

        instance.choices = choices_list
        instance.save()
        return instance