"""Unit test"""
# -*- coding: utf-8 -*-
from django.core.urlresolvers import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from todo.models import TodoItem

# Create your tests here.
def create_item(client):
    """Create todoitem"""
    url = reverse('todoitem-list')
    data = {'title': 'Todo Title'}
    return client.post(url, data, format='json')

class TestCreateTodoItem(APITestCase):
    """Test TodoItem creation"""
    def setUp(self):
        """create item"""
        self.response = create_item(self.client)

    def test_received_201_status(self):
        """test creaate status code"""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_received_location_header(self):
        """test header hyperlink"""
        self.assertRegexpMatches(self.response['Location'], '^http://.+/todos/[\\d]+$')

    def test_item_was_created(self):
        """test items count"""
        self.assertEqual(TodoItem.objects.count(), 1)

    def test_item_has_correct_title(self):
        """test item title"""
        self.assertEqual(TodoItem.objects.get().title, 'Todo Title')

class TestUpdateTodoItem(APITestCase):
    """Test update TodoItem"""
    NEW_TITLE = 'Todo Title Upd'
    NEW_COMPLETE = True
    def setUp(self):
        """create and update item"""
        response = create_item(self.client)
        self.assertEqual(TodoItem.objects.get().completed, False)
        url = response['Location']
        data = {'title': self.NEW_TITLE, 'completed': self.NEW_COMPLETE}
        self.response = self.client.put(url, data, format='json')

    def test_received_200_status(self):
        """test update status code"""
        self.assertEqual(self.response.status_code, status.HTTP_200_OK)

    def test_item_was_updated(self):
        """test item update fields"""
        self.assertEqual(TodoItem.objects.get().completed, self.NEW_COMPLETE)
        self.assertEqual(TodoItem.objects.get().title, self.NEW_TITLE)

class TestPatchTodoItem(APITestCase):
    """Test patch TodoItem"""
    NEW_COMPLETE = True
    def setUp(self):
        """create and patch item"""
        response = create_item(self.client)
        self.assertEqual(TodoItem.objects.get().completed, False)
        url = response['Location']
        data = {'completed': self.NEW_COMPLETE}
        self.response = self.client.put(url, data, format='json')

    def test_received_200_status(self):
        """test patch status code"""
        self.assertEqual(self.response.status_code, status.HTTP_200_OK)

    def test_item_was_updated(self):
        """test item update fields"""
        self.assertEqual(TodoItem.objects.get().completed, self.NEW_COMPLETE)

class TestDeleteTodoItem(APITestCase):
    """Test delete TodoItem"""
    def setUp(self):
        """create and delete item"""
        response = create_item(self.client)
        self.assertEqual(TodoItem.objects.count(), 1)
        url = response['Location']
        self.response = self.client.delete(url)

    def test_received_204_status(self):
        """test delete status code"""
        self.assertEqual(self.response.status_code, status.HTTP_204_NO_CONTENT)

    def test_item_was_deleted(self):
        """test items count"""
        self.assertEqual(TodoItem.objects.count(), 0)

class TestDeleteAllTodoItems(APITestCase):
    """Test delete all TodoItems"""
    def setUp(self):
        """create and delete items"""
        create_item(self.client)
        create_item(self.client)
        self.assertEqual(TodoItem.objects.count(), 2)
        self.response = self.client.delete(reverse('todoitem-list'))

    def test_received_204_status(self):
        """test delete status code"""
        self.assertEqual(self.response.status_code, status.HTTP_204_NO_CONTENT)

    def test_item_was_deleted(self):
        """test items count"""
        self.assertEqual(TodoItem.objects.count(), 0)
